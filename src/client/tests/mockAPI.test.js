const json = require('../../server/mockAPI');

test('check mockAPI content at server side', () => {

    expect(json.title).toBe('test json response');
    expect(json.message).toContain('testing');
    expect(json.time).toHaveLength(3);

});