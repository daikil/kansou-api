import express, {NextFunction, Request, Response} from 'express';
import { getKansou } from './handler/getKansou';
import * as mongodb from './lib/mongodb';
import path from 'path';

const app = express();

app.use((error: Error, request: Request, response: Response, next: NextFunction): void => {
    response.status(500).send("Internal server error");
});
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (request: Request, response: Response) => {
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/kansou', async (request: Request, response: Response) => {
    try {
        const kansou = await getKansou();
        response.status(200).json(kansou);
    } catch (error) {
        response.status(500).send("Internal error");
    }
});

app.get('/kansou/:id', async (request: Request, response: Response) => {
    try {
        const id: number = Number(request.params.id);
        const kansou = await getKansou(id);
        response.status(200).json(kansou);
    } catch (error) {
        response.status(500).send("Internal error");
    }
})

mongodb.connect()
    .then(() => {
        // MongoDBに接続成功したらサーバーを起動
        app.listen(process.env.PORT, () => {
            console.log("start listening");
        });
    })
    .catch((error) => {
         // エラーが発生した場合はログを出力してプロセスを終了
        console.error(error);
        process.exit(1);
    })
