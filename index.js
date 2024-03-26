import  Express from "express";
import cors from "cors";
import bodyParse from 'body-parser';
import Router from './routes/routes.js'

const app = Express();
app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));

app.use(Router);

app.listen(5000, () => console.log('Server running at localhost:5000'));