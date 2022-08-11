import { Association, Model, DataTypes, Op } from 'sequelize';
import sequelize from 'src/database/sequelize';
import hashPassword from 'src/utils/hashPassword';
import * as bcrypt from 'bcryptjs';
import Role from '../roles/model';

enum Status {
  VERIFIED = 'verified',
  UNVERIFIED = 'unverified',
}

export default class User extends Model {
  public id!: number;
  public firstname!: string | null;
  public lastname!: string | null;
  public email!: string;
  public password!: string;
  public status!: Status;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initialise: (models: any) => void;

  public static getByField: (field, value) => Promise<User>;
  public static hasCorrectPassword: (password, user) => boolean;
  public static createUser: (data) => Promise<User>;
  public static updateUser: (data) => Promise<User>;

  // magic methods
  public addRoles: (data: any) => Promise<any>;
  public getRoles: () => Promise<Array<Role>>;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users',
  sequelize,
  scopes: {
    byField({ field, value }) {
      return {
        where: {
          [field]: {
            [Op.eq]: value,
          },
        },
      };
    },
  },
});

User.getByField = (field, value) => User.scope({ method: ['byField', { field, value }] }).findOne();

User.hasCorrectPassword = (password, user) => {
  return bcrypt.compareSync(password, user.password);
};

User.createUser = async (data): Promise<User> => {
  const newUser = await User.create({
    ...data,
    password: hashPassword(data.password),
  });
  return newUser;
};

User.initialise = function (models) {
  User.belongsToMany(models.Role, {
    foreignKey: 'userId',
    otherKey: 'roleId',
    timestamps: false,
    through: 'userRole',
    as: 'roles'
  });
};