/**
 * 
 */
 
 const pjTestUtill = function(){
  'use strict';
	this.testVal1 = '1';
	this.testVal2 = '2';
	this.testVal3 = '3';
	let testVal4 = '4';
	
	this.logConloe=function(){
		console.log(this.testVal1);
		console.log(this.testVal2);
		console.log(this.testVal3);
		console.log(testVal4);
	}
	
	
	
};
debugger;

export default new pjTestUtill();