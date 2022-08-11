import { Model, DataTypes } from 'sequelize';
import sequelize from 'src/database/sequelize';
import Role from '../model';

/**
 * UserRoleModel
 * This is a pivot table Model that links a User to it's Roles
 */
export default class UserRole extends Model {
  public roleId!: number;
  public userId!: string;
  public role: Role;

  public static initialise: (models: any) => void;
}

UserRole.init({
  roleId: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'userRole',
  timestamps: false,
  sequelize
});

UserRole.removeAttribute('id');

/**
 * Initialising the UserRole Model
 * adding model associations and class methods
 * @param {Object} models - sequelize moodels
 * @returns {void} void
 */
UserRole.initialise = (models) => {
  UserRole.belongsTo(models.Role, {
    foreignKey: 'roleId',
    as: 'role'
  });
};
