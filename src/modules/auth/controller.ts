import User from 'src/modules/user/model';
import response from 'src/http/response';
import { Response, Request } from 'express';
import httpException from 'src/http/httpException';
import { ERROR_CODES } from 'src/constants/response';
import generateToken from 'src/utils/generateToken';
import UserRole from '../roles/userRole/model';
import Role, { Roles } from '../roles/model';
import logger from 'src/utils/logger';
import hashPassword from 'src/utils/hashPassword';


export const userSignup = async (req: Request, res: Response) => {
  const newUser = await User.createUser(req.body);
  const userRole = await Role.findOne({ 
    where: { name: Roles.USER },
    attributes: ['id', 'name']
  });
  await UserRole.create({ userId: newUser.id, roleId: userRole.id });

  const data = {
    ...newUser.toJSON(),
    roles: [{ id: userRole.id, name: userRole.name }]
  }

  return response.created(res, data);
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.getByField('email', email);
  const userRoles = await user.getRoles({ attributes: ['id', 'name'] });

  if (!user) {
    throw httpException.handle(ERROR_CODES.USR_07);
  }

  const isCorrectPassword = await User.hasCorrectPassword(password, user);

  if (!isCorrectPassword) {
    throw httpException.handle(ERROR_CODES.USR_07);
  }

  const { token, expiresIn } = generateToken(user);

  const userData = user.toJSON();

  delete (userData as User).password;

  const data = {
    ...userData,
    roles: userRoles.map(item => ({
      name: item.name,
      id: item.id
    })),
    token,
    expiresIn
  };
  return response.success(res, data);
};

export const getUserProfile = async (req, res) => {
  const user = await User.findByPk(req.decoded.id);

  if (!user) {
    throw httpException.handle(ERROR_CODES.USR_07);
  }

  const userData = user.toJSON();
  delete userData.password;
  return response.success(res, userData);
};

export const verifyUserToken = async (req, res) => {
  // if this loads, it means it made it past the verifyToken middleware
  // so user token is active
  return response.success(res);
}
