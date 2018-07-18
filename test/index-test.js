const assert = require("assert");
const indexStr = require("../index.js");

describe("#index.js", () => {
    it('index.js == hello world',()=>{
        assert.strictEqual(indexStr, 'hello world');
    })
});
