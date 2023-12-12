import { MongoClient } from 'mongodb';
import { mongodbConfig } from './config';

let client: MongoClient | null = null;

const connect = async (): Promise<MongoClient> => {
    if(!mongodbConfig){
        console.error("環境変数SECRET_KEYが設定されていません！");
        process.exit(); // サーバーとめる
    }
    client = new MongoClient(mongodbConfig);
    
    return client;
}

const getCollection = () => {
    if(client === null){
        throw new Error("client not empty");
    }
    const database = client.db("kansoubun");
    const kansouCollection = database.collection("kansoubun");

    return kansouCollection;
}

export { connect, getCollection };