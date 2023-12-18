import {getCollection} from '../lib/mongodb';

type KansouType = {
    id: number;
    text: string;
};

export const getKansou = async (id?: number): Promise<KansouType | null> => {
    const kansouCollection = getCollection();
    const collectionCount: number = await kansouCollection.countDocuments();
    console.log(collectionCount);
    const key = id ? (id) : Math.floor(Math.random() * collectionCount);
    console.log(key);
    const kansou = await kansouCollection.findOne({id: key});
    const responseJson: KansouType = !kansou ? {id: 999, text: "楽しかった"} : {id: kansou.id, text: kansou.text};

    return responseJson;
};