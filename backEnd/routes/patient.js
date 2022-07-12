import { Router } from 'express';
import { addPatient, deletepatient, getpatient, getpatients, putpatient, } from '../controllers/patient.js';
import checkAuth from '../middleware/authMiddleware.js';

const router = Router();


router.route('/')
    .post(checkAuth ,addPatient)
    .get(checkAuth, getpatients);

router.route('/:id')
    .get(checkAuth, getpatient)
    .put(checkAuth, putpatient)
    .delete(checkAuth, deletepatient);


export default router;

