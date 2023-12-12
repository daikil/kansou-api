"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getKansou_1 = require("./handler/getKansou");
const mongodb = __importStar(require("./lib/mongodb"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((error, request, response, next) => {
    response.status(500).send("Internal server error");
});
app.use('/static', express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html');
});
app.get('/kansou', async (request, response) => {
    try {
        const kansou = await (0, getKansou_1.getKansou)();
        response.status(200).json(kansou);
    }
    catch (error) {
        response.status(500).send("Internal error");
    }
});
app.get('/kansou/:id', async (request, response) => {
    try {
        const id = Number(request.params.id);
        const kansou = await (0, getKansou_1.getKansou)(id);
        response.status(200).json(kansou);
    }
    catch (error) {
        response.status(500).send("Internal error");
    }
});
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
});
//# sourceMappingURL=server.js.map