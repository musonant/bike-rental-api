import User from 'src/modules/user/model';
import Role from 'src/modules/roles/model';
import models from 'src/modules/models';
import response from 'src/http/response';
import UserRole from '../roles/userRole/model';

export const updateUserProfile = async (req, res) => {
  const user = await User.findByPk(req.decoded.id);

  const updatedUser = await user.update(req.body);

  return response.success(res, updatedUser);
}

export const addUserToRole = async (req, res) => {
  const { userId, roleId } = req.body;
  await UserRole.findOrCreate({where: {roleId, userId}});
  const userRoles = await models.UserRole.findAll({
    include: [{
      model: models.Role,
      as: 'role'
    }]
  });

  const roles = userRoles.map((item) => ({
    name: item.role.name,
  }));

  return response.success(res, roles);
}