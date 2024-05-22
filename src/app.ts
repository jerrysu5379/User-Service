import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
const MONGO_URI = process.env.MONGO_URI as string;
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
export default app;