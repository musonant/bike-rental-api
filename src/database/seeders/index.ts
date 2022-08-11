import { seedRoles } from './roles-seed';

const seedDatabase = async () => {
    await seedRoles();
};

seedDatabase();
