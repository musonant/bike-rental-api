import User from 'src/modules/user/model';
import response from 'src/http/response';
import { Response, Request } from 'express';
import httpException from 'src/http/httpException';
import { ERROR_CODES } from 'src/constants/response';
import generateToken from 'src/utils/generateToken';


export const userSignup = async (req: Request, res: Response) => {
  const newUser = await User.createUser(req.body);

  return response.created(res, newUser);
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.getByField('email', email);

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
