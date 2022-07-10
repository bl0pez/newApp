import Veterinary from "../models/Veterinary.js";




const verifyEmail = async(email) => {
    const emailExist = await Veterinary.findOne({email});

    if(!emailExist){
        return false;
    }

    return true;

}

export {
    verifyEmail
}