import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { dbConnect } from '../dbConnect';
dotenv.config();
import { questionsRouter } from './propertys';


if (!process.env.PORT) {
    process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();
// Database Connection
dbConnect();
app.use(cors());
app.use(express.json());
app.use('/api/property', questionsRouter);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});