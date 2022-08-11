import * as dotenv from 'dotenv';
import { EnvironmentName } from 'src/types';

dotenv.config();

const NODE_ENV = process.env.NODE_ENV || EnvironmentName.DEVELOPMENT;

const DEBUG = process.env.DEBUG === 'true';

const {
  PORT,
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_PORT,
  DB_NAME,
  SALT_ROUNDS,
  TOKEN_EXPIRTY_TIME,
  JWT_SECRET,
} = process.env;

export {
  NODE_ENV,
  DEBUG,
  PORT,
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_PORT,
  DB_NAME,
  SALT_ROUNDS,
  TOKEN_EXPIRTY_TIME,
  JWT_SECRET
};
