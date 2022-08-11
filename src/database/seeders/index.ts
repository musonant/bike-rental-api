import { seedRoles } from './roles-seed';
import { seedUsers } from './user-seed';

const seedDatabase = async () => {
    await seedRoles();
    await seedUsers();
};

seedDatabase();
