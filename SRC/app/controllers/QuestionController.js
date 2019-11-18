import Question from '../models/Question';
import authConfig from '../../config/auth';

class QuestionController {
  async store(req, res) {
    const {
      id_usuario,
      age,
      gender,
      height,
      weight,
      systolic,
      diastolic,
      cholesterol,
      gluc,
      smoke,
      alco,
      active,
    } = await Question.create({...req.body,id_usuario : req.userId});
    return res.json({
    id_usuario,
      age,
      gender,
      height,
      weight,
      systolic,
      diastolic,
      cholesterol,
      gluc,
      smoke,
      alco,
      active,
    });
  }

  async index(req ,res ){
    const quiz = await Question.findAll({ where:{id_usuario:req.userId} });
    return res.json({quiz});

  }
}
export default new QuestionController();
