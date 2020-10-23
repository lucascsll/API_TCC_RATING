import Question from '../models/Question';
import authConfig from '../../config/auth';

class QuestionController {
  async store(req, res) {
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
