import { Router } from 'express';
import { confirmEmail, login, register } from '../controllers/auth.js';
import { getItems } from '../controllers/veterinary.js';

const router = Router();

router.get('/', getItems);



router.get('/login', login);

router.post('/register', register)

router.get('/confirm/:token', confirmEmail); 

export default router;
