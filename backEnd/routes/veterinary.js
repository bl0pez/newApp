import { Router } from 'express';
import { confirmEmail, login, register } from '../controllers/auth.js';

const router = Router();




router.get('/login', login);

router.post('/register', register)

router.get('/confirm/:token', confirmEmail); 

export default router;
