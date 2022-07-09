import { Schema, model } from 'mongoose';

const veterinarySchema = new Schema({
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

export const Veterinary = model('Veterinary', veterinarySchema);