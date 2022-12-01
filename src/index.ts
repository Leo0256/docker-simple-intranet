import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    return res.json({
        message: 'ok'
    });
});

app.listen(port, () => console.log('Listening on port: ', port));