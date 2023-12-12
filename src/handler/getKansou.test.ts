import { getKansou } from "./getKansou";

const mockMongoGet = jest.fn();

jest.mock('../lib/mongodb', () => {
    return {
        getCollection: mockMongoGet
    };
});

test("request key", async () => {
    mockMongoGet.mockResolvedValue(JSON.stringify({"id": 18, "text": "心を動かす体験で、新しい理解を深めました。"}));

    const requestKey = 18;
    const kansou = await getKansou(requestKey);

    expect(kansou?.id).toBe(18);
    expect(kansou?.text).toBe("心を動かす体験で、新しい理解を深めました。");
})