import Question from '../models/Question';
import authConfig from '../../config/auth';

class QuestionController {
  async store(req, res) {
    const userAvaliatiBook = await User.findOne({ where: { id_usuario: req.body.id_usuario,id_livro:req.body.id_livro } });
    console.log(userAvaliatiBook)

    const {
      id_usuario,
      id_livro,
      nome_livro,
      rating
 
    } = await Question.create({...req.body,id_usuario : req.userId});
    return res.json({
    id_usuario,
    id_livro,
    nome_livro,
    rating,
    });
  }

  async index(req ,res ){
    const quiz = await Question.findAll({ where:{id_usuario:req.userId} });
    return res.json({quiz});

  }
}
export default new QuestionController();
