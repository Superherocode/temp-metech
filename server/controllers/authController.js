import bcrypt from 'bcryptjs';
import jwwt from 'jsonwebtoken'
import userModer from '../model/userModel.js';

export const register = async (req, res) => {

  const {name, email, password} = req.body;

  if (!name || !email || !password) {
    return res.json({success:false, message: 'Missing Details'})
  }

  try {

    const existingUser = await userModer.findOne({email})

    if (existingUser) {
      return res.json({success: false, message: "Người dùng đã tồn tại!"})
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    
    const user = new userModer({name, email, password: hashedPassword})
    await user.save();

    const token = jwwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: '7d'})
  } catch (error) {
    res.json({success: false, message: error.message})
  }
}