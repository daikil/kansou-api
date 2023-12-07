"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollection = exports.connect = void 0;
const mongodb_1 = require("mongodb");
const config_1 = require("./config");
let client = null;
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    client = new mongodb_1.MongoClient(config_1.mongodbConfig);
    return client;
});
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
