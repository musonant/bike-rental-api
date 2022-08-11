import { Model, DataTypes } from 'sequelize';
import sequelize from 'src/database/sequelize';

export default class Bike extends Model {
  public id!: number;
  public model!: string;
  public color!: string;
  public location!: string;
  public status!: string;
  public creatorId!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initialise: (models: any) => void;
}

Bike.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  model: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  color: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  location: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  creatorId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'bikes',
  sequelize,
});

Bike.initialise = function (models) {
  Bike.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'creator'
  });
};