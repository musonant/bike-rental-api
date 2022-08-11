import * as Joi from '@hapi/joi';
import {
  email,
  password,
  firstname,
  lastname,
} from './validationFields/user';


const schema = Joi.object({
  email,
  password,
  firstname,
  lastname,
});


export default schema;
