const data = require("../testData.js");
const commands = require("../src/commands.js");


var assert = require('assert');
describe('commands', function() {
  describe('count', function() {
    it('should return the counts of People and Animals by counting the number of children and appending it in the name, eg. `Satanwi [2]`', function() {
      assert.equal(JSON.stringify(commands.count(data.data)), JSON.stringify(data.countResult));
    });
  });
  describe('filter', function() {
    it('should return only animals containing `ry`', function() {
      assert.equal(commands.filter(data, "ry"), -1);
    });
  });
});