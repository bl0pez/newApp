import jwt from 'jsonwebtoken';

const generateJWT = (veterinary) => {

    const secret = process.env.JWT_SECRET;

    return jwt.sign({veterinary}, secret, { expiresIn: '1d' });

}


export default generateJWT;