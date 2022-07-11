import { Router } from 'express';
import { confirmEmail, login, register } from '../controllers/auth.js';
import { profile } from '../controllers/user.js';
import checkAuth from '../middleware/authMiddleware.js';

const router = Router();



//rutas de autenticacion
router.get('/login', login);

router.post('/register', register)

router.get('/confirm/:token', confirmEmail); 

//rutas de usuario
router.get('/profile', checkAuth ,profile);



export default router;
