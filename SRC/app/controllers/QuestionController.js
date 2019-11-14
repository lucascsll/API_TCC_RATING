import Question from '../models/Question';

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
    } = await Question.create(req.body);
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
}
export default new QuestionController();
