import Sequelize, { Model } from 'sequelize';

class Question extends Model {
  static init(sequelize) {
    super.init(
      {
        id_usuario: Sequelize.INTEGER,
        id_livro: Sequelize.INTEGER,
        nome_livro: Sequelize.STRING,
        rating: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Question;
