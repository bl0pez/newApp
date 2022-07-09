import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello from the veterinary route');
});

router.get('/login', (req, res) => {
    res.send('login');
});




export default router;
