var Field = require('../record_model/Field.js');
var Record = require('../record_model/Record.js');

function TestaBuilder(sia, abi){
	
	this.fieldEmpty =  new Field(1, " ");
	this.fieldTipoRecord = new Field(2, "IM");
	this.fieldSia = new Field(5, sia);
	this.fieldAbi = new Field(5, abi);
	this.testa = new Record();
	this.testa.addField(this.fieldEmpty);
	this.testa.addField(this.fieldTipoRecord);
	this.testa.addField(this.fieldSia);
	this.testa.addField(this.fieldAbi);
	
	this.date = new Date();
	this.dateString = "";
	this.dateString += this.date.getDate().toString();
	if(new Number(this.date.getMonth()+ 1).toString().length ==2)
		this.dateString += new Number(this.date.getMonth()+ 1).toString();
	else
		this.dateString += "0".concat(new Number(this.date.getMonth()+ 1).toString());
	this.dateString += this.date.getFullYear().toString().substr(2,4);
	this.dateField = new Field(6,this.dateString);
	this.testa.addField(this.dateField);
	
	
	console.log(this.testa.toCBI());
}
module.exports = TestaBuilder;
