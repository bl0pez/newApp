import pkg from 'mongoose';
const { Schema, model } = pkg;

const PatientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    email: {
        type: String,
        email: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    vaterinary: {
        type: Schema.Types.ObjectId,
        ref: 'Vaterinary',
        required: true
    },
}
    , {
        timestamps: true, //TODO: createdAT, updateAT
        versionKey: false,
    }
);