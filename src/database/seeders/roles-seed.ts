import models from 'src/modules/models';
import { Roles } from 'src/modules/roles/model';
import logger from 'src/utils/logger';

const { Role } = models;

export const seedRoles = async () => {
  const rolesData = [
    { name: Roles.MANAGER },
    { name: Roles.USER }
  ]

  const roles = await Role.findAll();
  logger.info({ roles })

  if (!roles.length) {
    const createdRoles = await Role.bulkCreate(rolesData);
    logger.info(createdRoles)
  }
}