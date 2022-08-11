export const TOKEN_EXPIRTY_TIME = '24h';

export const ERROR_CODES = {
  USR_07: {
    message: 'Account not found',
    status: 404,
    code: 'USR_07'
  },
  USR_08: {
    message: 'Passwords do not match',
    status: 422,
    code: 'USR_08'
  },
  AUTH_01: {
    message: 'Invalid token',
    status: 403,
    code: 'AUTH_01'
  },
  AUTH_02: {
    message: 'Unauthorized',
    status: 403,
    code: 'AUTH_02'
  },
  POST_01: {
    message: 'Internal Server Error',
    status: 500,
    code: 'POST_01'
  },
  GEN_O1: {
    message: 'Resource Not found',
    status: 404,
    code: 'GEN_01'
  },
  DAT_01: {
    message: 'Data not found',
    status: 404,
    code: 'DAT_01'
  },
  SVR_01: {
    message: 'Internal Server Error',
    status: 500,
    code: 'SVR_01'
  },
  RCO_01: {
    message: 'Code not found',
    status: 404,
    code: 'RCO_01'
  },
}