const test = require("../testData.js");
const commands = require("../src/commands.js");


var assert = require('assert');
describe('commands', function() {
	describe('filter', function() {
		it('should return only animals containing `ow`', function() {
			assert.equal(JSON.stringify(commands.filter(test.data, "ow")), JSON.stringify(test.filterResult));
		});
	});
	describe('filter null', function() {
		it('should return null', function() {
			assert.equal(JSON.stringify(commands.filter(test.data, "testnull")), JSON.stringify(null));
		});
	});
	describe('count', function() {
		it('should return the counts of People and Animals by counting the number of children and appending it in the name, eg. `Satanwi [2]`', function() {
			assert.equal(JSON.stringify(commands.count(test.data)), JSON.stringify(test.countResult));
		});
	});
});