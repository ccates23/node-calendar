var path = require('path');
var should = require('chai').should();
var zeller = require(path.join(process.cwd(), '/lib/zeller'));


describe('zeller', function() {
	it('should give the day of the week', function() {
	zeller(1,21,2005).should.equal(6);
	zeller(11,23,1976).should.equal(3);
    zeller(9,24,2011).should.equal(0);
    zeller(10,10,2013).should.equal(5);
	});
});