import * as jwt from 'jsonwebtoken';
import httpException from 'src/http/httpException';
import User from 'src/modules/user/model';
import models from 'src/modules/models';
import { ERROR_CODES } from 'src/constants/response';
import { Roles } from 'src/modules/roles/model';

/**
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @param {Function} next - handle to the next middleware
 * @return {void}
 */
const verifyManager = async (req, res, next) => {
  const user = await User.findByPk(req.decoded.id, {
    include: [{
      model: models.Role,
      as: 'roles',
      attributes: ['id', 'name']
    }]
  });
  
  if (!user.toJSON().roles.find(item => item.name === Roles.MANAGER)) {
    return next(httpException.handle(ERROR_CODES.AUTH_02));
  }
  next();
};

export default verifyManager;
