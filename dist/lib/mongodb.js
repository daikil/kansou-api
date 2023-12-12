"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollection = exports.connect = void 0;
const mongodb_1 = require("mongodb");
const config_1 = require("./config");
let client = null;
const connect = async () => {
    if (!config_1.mongodbConfig) {
        console.error("環境変数SECRET_KEYが設定されていません！");
        process.exit(); // サーバーとめる
    }
    client = new mongodb_1.MongoClient(config_1.mongodbConfig);
    return client;
};
exports.connect = connect;
const getCollection = () => {
    if (client === null) {
        throw new Error("client not empty");
    }
    const database = client.db("kansoubun");
    const kansouCollection = database.collection("kansoubun");
    return kansouCollection;
};
exports.getCollection = getCollection;
//# sourceMappingURL=mongodb.js.map