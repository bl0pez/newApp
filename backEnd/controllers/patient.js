import Patient from "../models/Patient.js";


const addPatient = async (req, res) => {

    const { name, owner, email, date, symptom } = req.body;
    const { _id } = req.veterinary;


    const patient = new Patient({
        name, owner, email, date, symptom, veterinary: _id
    });

    try {

        const newPatient = await patient.save();
        res.json({
            message: "Patient added successfully",
            newPatient
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal server error',
        });
    }

}

const getpatients = async (req, res) => {
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


const getpatient = async (req, res) => {
    const { id } = req.params;

    try {
        const patient = await Patient.findById(id);


        if (patient.veterinary._id.toString() !== req.veterinary._id.toString()) {
            return res.status(401).json({
                message: 'Unauthorized'
            })
        }

        res.json({
            message: "Details of patient",
            patient
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
        });
    }

}

const putpatient = async (req, res) => {
    const { id } = req.params;
    const { name, owner, email, date, symptom } = req.body;

    const patient = await Patient.findById(id);

    if(!patient){
        return res.status(404).json({
            message: 'Patient not found'
        })
    }

    try {
        if (patient.veterinary._id.toString() !== req.veterinary._id.toString()) {
            return res.status(401).json({
                message: 'Unauthorized'
            })
        }

        patient.name = name || patient.name;
        patient.owner = owner || patient.owner;
        patient.email = email || patient.email;
        patient.date = date || patient.date;
        patient.symptom = symptom || patient.symptom;

        res.json({
            message: "Patient updated successfully",
            patient
        })

    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
        });
    }

}


const deletepatient = async (req, res) => {
    const { id } = req.params;

    const patient = await Patient.findById(id);

    if(!patient){
        return res.status(404).json({
            message: 'Patient not found'
        })
    }

    try {
        if (patient.veterinary._id.toString() !== req.veterinary._id.toString()) {
            return res.status(401).json({
                message: 'Unauthorized'
            })
        }

        await patient.remove();
        res.json({
            message: "Patient deleted successfully"
        })

    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
        });
    }
}


export {
    addPatient,
    getpatients,
    getpatient,
    putpatient,
    deletepatient,
}