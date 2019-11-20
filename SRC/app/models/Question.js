import Sequelize, { Model } from 'sequelize';

class Question extends Model {
  static init(sequelize) {
    super.init(
      {
        id_usuario: Sequelize.INTEGER,
        age: Sequelize.INTEGER,
        gender: Sequelize.INTEGER,
        height: Sequelize.INTEGER,
        weight: Sequelize.INTEGER,
        systolic: Sequelize.INTEGER,
        diastolic: Sequelize.INTEGER,
        cholesterol: Sequelize.INTEGER,
        gluc: Sequelize.INTEGER,
        smoke: Sequelize.INTEGER,
        alco: Sequelize.INTEGER,
        active: Sequelize.INTEGER,
        score: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Question;
