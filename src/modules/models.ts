import User from './user/model';
import Role from './roles/model';
import UserRole from './roles/userRole/model';


const db = {
  User: User,
  Role: Role,
  UserRole: UserRole
};

User.initialise(db);
Role.initialise(db);
UserRole.initialise(db);

export default db;