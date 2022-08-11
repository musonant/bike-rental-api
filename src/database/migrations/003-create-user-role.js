module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_role', {
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      roleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  down: queryInterface => queryInterface.dropTable('user_role'),
};
