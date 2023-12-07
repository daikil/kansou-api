import express, {NextFunction, Request, Response} from 'express';
import { getKansou } from './handler/getKansou';
import * as mongodb from './lib/mongodb';

const app = express();

app.get('/', (request: Request, response: Response) => {
    response.status(200).send("Hello");
});

app.get('/kansou', async (request: Request, response: Response) => {
    try {
        const kansou = await getKansou();
        response.status(200).json(kansou);
    } catch (error) {
        response.status(500).send("Internal error");
    }
});

app.use((error: Error, request: Request, response: Response, next: NextFunction): void => {
    response.status(500).send("Internal server error");
});

mongodb.connect()
    .then(() => {
        // MongoDBに接続成功したらサーバーを起動
        app.listen(3000, () => {
            console.log("start listening");
        });
    })
    .catch((error) => {
         // エラーが発生した場合はログを出力してプロセスを終了
        console.error(error);
        process.exit(1);
    })
