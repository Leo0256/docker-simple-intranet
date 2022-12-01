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
app.get('/', renderJournalHandler);
app.get('/new-memo', renderNewMemoHandler);
app.post('/memo-added', addNewMemoHandler);

app.listen(port, () => console.log('Listening on port: ', port));


//
async function renderJournalHandler(_: any, res: Response) {
    const memoList = await service.getMemos();
    res.render('journal.ejs', { memoList });
}

function renderNewMemoHandler(_: any, res: Response) {
    res.render('new-memo.ejs');
}

function addNewMemoHandler(req: Request, res: Response) {
    const newMemo = new Memo();
    const data = req.body;

    newMemo.title = data.title;
    newMemo.descr = data.descr;
    service.newMemo(newMemo);
    res.render('memo-added.ejs', { newMemo });
}