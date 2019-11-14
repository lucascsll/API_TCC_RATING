module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      gender: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      systolic: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      diastolic: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cholesterol: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      gluc: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      smoke: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      alco: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      active: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('questions');
  },
};
