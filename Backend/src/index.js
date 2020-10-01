import express from 'express';
import apiRoutes from "./modules";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

apiRoutes(app);

app.get('/', (req, res, err) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`The app is listning on Port ${PORT}`));