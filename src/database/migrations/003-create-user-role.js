module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userRole', {
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
  down: queryInterface => queryInterface.dropTable('userRole'),
};
