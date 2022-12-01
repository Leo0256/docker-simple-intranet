import express, { Request, Response } from "express";
import cors from 'cors';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

import { Memo } from './models/memo';
import Service from './models/services';

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*',
    credentials: true
}));

var service = new Service();
service.start();

app.use(express.static('src/public'));
app.get('/', (req: Request, res: Response) => {
    return res.json({
        message: 'ok'
    });
});

app.listen(port, () => console.log('Listening on port: ', port));