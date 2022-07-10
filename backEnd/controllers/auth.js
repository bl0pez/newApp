import Veterinary  from "../models/Veterinary.js";



const register = async (req, res) => {

    const {email, password, name} = req.body;

    const emailExist = await Veterinary.findOne({email});

    if(emailExist){
        const error = new Error('Email already exist');
        return res.status(400).json({
           message: error.message
        });
    }

    
    try {

        const user = await Veterinary.create({ email, password, name });
    
        res.json({
            message: "User created successfully",
        })
        
    } catch (error) {
        console.log('ERROR_REGISTER', error.message);
    }

    res.json({
        message: 'register'
    });
}

const login = async (req, res) => {

}

const confirmEmail = async (req, res) => {
    const {token} = req.params;

    
    try {
        const confirmEmail = await Veterinary.findOneAndUpdate({token}, {veryfied: true, token: null} );
    
        if(!confirmEmail){
            const error = new Error('Invalid token');
            return res.status(400).json({
               message: error.message
            });
        }

        res.json({
            message: "Email verified successfully",
        })
        
    } catch (error) {
        console.log('ERROR_CONFIRM_EMAIL', error.message);
    }

}


export {
    register,
    login,
    confirmEmail,
}