import Patient from "../models/Patient.js";


const addPatient = async(req, res) => {
    
    console.log(req);

    const { name, owner, email, date, symptom } = req.body;
    const { _id } = req.veterinary;


    const patient = new Patient({
        name, owner, email, date, symptom, vaterinary: _id
    });

    try {

        const newPatient = await patient.save();
        res.json({
            message: "Patient added successfully",
            newPatient
        })

    }catch(error){
        res.status(500).json({
            message: 'Internal server error',
        });
    }

}

const getpatients = async(req, res) => {
    try {
        const patient = await Patient.find()
        .where('vaterinary')
        .equals(req.veterinary._id);

    res.json({
        message: "Patient list",
        patient
    })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
        });
    }

}


const getpatient = async(req, res) => {

}

const putpatient = async(req, res) => {

}
const deletepatient = async(req, res) => {

}


export {
    addPatient,
    getpatients,
    getpatient,
    putpatient,
    deletepatient,
}