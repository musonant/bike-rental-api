import { Model, DataTypes } from 'sequelize';
import sequelize from 'src/database/sequelize';

export enum Roles {
  MANAGER = 'manager',
  USER = 'user',
}

export default class Role extends Model {
  public id!: number;
  public name!: string;

  public static initialise: (models: any) => void;
}

Role.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'roles',
  sequelize,
});

Role.initialise = function (models) {};
