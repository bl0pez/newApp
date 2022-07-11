import { Router } from 'express';
import { addPatient, getPatient } from '../controllers/patient.js';

const router = Router();


router.route('/')
    .post(addPatient)
    .get(getPatient);


export default router;

