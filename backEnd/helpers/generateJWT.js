import jwt from 'jsonwebtoken';

const generateJWT = (user) => {

    const secret = process.env.JWT_SECRET;

    return jwt.sign({
        data: user
    }, secret, { expiresIn: '1d' });

}


export default generateJWT;