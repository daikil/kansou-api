"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKansou = void 0;
const mongodb_1 = require("../lib/mongodb");
const getKansou = async (id) => {
    const kansouCollection = (0, mongodb_1.getCollection)();
    const key = id ? (id) : Math.floor(Math.random() * 20);
    const kansou = await kansouCollection.findOne({ id: key });
    const responseJson = !kansou ? { id: 999, text: "" } : { id: kansou.id, text: kansou.text };
    return responseJson;
};
exports.getKansou = getKansou;
//# sourceMappingURL=getKansou.js.map