import express from 'express';
import dotenv from 'dotenv';
import connectMongoDB from './config/connectDB.js';

// Importing routes
import veterinary from './routes/veterinary.js';
import patient from './routes/patient.js';

const app = express();
dotenv.config();

connectMongoDB();

app.use(express.json());

//routes
app.use('/api/veterinary', veterinary);
app.use('/api/patient', patient);

//middleware


app.use((req, res, next) => {
    res.status(404).send('not found 404');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Server is running on port 4000');
});