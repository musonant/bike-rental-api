import User from 'src/modules/user/model';
import Role from './model';
import response from 'src/http/response';

export const updateUserProfile = async (req, res) => {
  const user = await User.findByPk(req.decoded.id);

  const updatedUser = await user.update(req.body);

  return response.success(res, updatedUser);
}

export const addUserToRole = async (req, res) => {
  const user = await User.findByPk(req.body.userId);
  const role = await Role.findByPk(req.body.roleId);

  const data = await user.addRoles([role]);

  return response.success(res, data);
}