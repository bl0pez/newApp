import pkg from 'mongoose';
const { Schema, model } = pkg;

import generateId from '../helpers/generate.js';

const VeterinarySchema = Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        email: true,
        trim: true
    },
    phone: {
        type: String,
        default: null,
        trim: true
    },
    website: {
        type: String,
        default: null,
        trim: true
    },
    token: {
        type: String,
        default: generateId(),
    },
    veryfied: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true, //TODO: createdAT, updateAT
        versionKey: false,
    }
);

export default model('Veterinary', VeterinarySchema);