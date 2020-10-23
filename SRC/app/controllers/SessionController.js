import jwt from 'jsonwebtoken';
import User from '../models/User';

import authConfig from '../../config/auth';

class SessionControler {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.json({ status:002 });
    }

    if (!(await user.checkPassword(password))) {
      return res.json({status:001});
    }

    const { id, name,idade,sexo } = user;

    return res.json({
      user: {
        id,
        name,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionControler();
