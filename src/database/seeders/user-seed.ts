import models from 'src/modules/models';
import { Roles } from 'src/modules/roles/model';
import User from 'src/modules/user/model';

const { Role } = models;

export const seedUsers = async () => {
  const data = {
    firstname: "John",
    lastname: "Doe",
    email: "rentalmanager@test.com",
    password: "SuperPass@1234"
  }

  const seedUser = await User.findOne({
    where: { email: data.email }
  });

  if (!seedUser) {
    const user = await User.create(data);
    const managerRole = await Role.findOne({ 
      where: { name: Roles.MANAGER },
      attributes: ['id', 'name']
    });
    const userRole = await user.addRoles(managerRole);
    console.log({ userRole });
  }
}