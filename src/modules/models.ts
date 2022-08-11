import User from './user/model';
import Role from './roles/model';
import UserRole from './roles/userRole/model';
import Bike from './bikes/model';


const db = {
  User: User,
  Role: Role,
  UserRole: UserRole,
  Bike: Bike,
};

User.initialise(db);
Role.initialise(db);
UserRole.initialise(db);
Bike.initialise(db);

export default db;