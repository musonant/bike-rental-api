import User from 'src/modules/user/model';
import models from 'src/modules/models';
import response from 'src/http/response';
import UserRole from '../roles/userRole/model';
import Bike from './model';

export const getAllBykes = async (req, res) => {
  const bikes = await Bike.findAll();

  return response.success(res, bikes);
}

export const createBike = async (req, res) => {
  const newBike = await Bike.create(req.body);

  return response.success(res, newBike);
}

export const editBike = async (req, res) => {
  const bike = await Bike.findByPk(req.params.bikeId);
  const updatedBike = await bike.update(req.body);

  return response.success(res, updatedBike);
}

export const getBike = async (req, res) => {
  const bike = await Bike.findByPk(req.params.bikeId);

  return response.success(res, bike);
}

export const deleteBike = async (req, res) => {
  await Bike.destroy({where: {id: req.body.bikeId}, force: true });

  return response.noContent(res);
}