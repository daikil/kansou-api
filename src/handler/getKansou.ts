import * as mongodb from '../lib/mongodb';

type kansouType = {
    id: number;
    text: string;
};

export const getKansou = async (): Promise<kansouType | null> => {
    const kansouCollection = mongodb.getCollection();
    const key = Math.floor(Math.random() * 100);
    const kansou = await kansouCollection.findOne({id: key});

    return kansou ? {id : kansou.id, text: kansou.text} : null;
};