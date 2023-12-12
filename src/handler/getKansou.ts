import {getCollection} from '../lib/mongodb';

type KansouType = {
    id: number;
    text: string;
};

export const getKansou = async (id?: number): Promise<KansouType | null> => {
    const kansouCollection = getCollection();
    const key = id ? (id) : Math.floor(Math.random() * 20);
    const kansou = await kansouCollection.findOne({id: key});
    const responseJson: KansouType = !kansou ? {id: 999, text: ""} : {id: kansou.id, text: kansou.text};

    return responseJson;
};