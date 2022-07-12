import { Router } from 'express';
import { addPatient, getpatients, } from '../controllers/patient.js';
import checkAuth from '../middleware/authMiddleware.js';

const router = Router();


router.route('/')
    .post(checkAuth ,addPatient)
    .get(checkAuth, getpatients);

router.route('/:id')
    .get(checkAuth, )
    .put(checkAuth, )
    .delete(checkAuth, );


export default router;

