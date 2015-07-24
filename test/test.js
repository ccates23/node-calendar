var should = require('chai').should();
var path = require('path')
var Month = require(path.join(process.cwd(), '/lib/month'));


describe('Mocha + Chai', function(){
  it('truthyness', function(){
    true.should.be.true;
    false.should.be.false;
  })
})


describe('Month', function(){
	it('should give the current month', function(){
		var month = new Month();
		month.should.be.a('object');
	})
});