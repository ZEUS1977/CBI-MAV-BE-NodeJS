var Field = require('../record_model/Field.js');
var Record = require('../record_model/Record.js');

function TestaBuilder(sia, abi){
	
	this.fieldEmpty =  new Field(1, "", "right", " ");
	this.fieldTipoRecord = new Field(2, "IM", "right", " ");
	this.fieldSia = new Field(5, sia, "right", " ");
	this.fieldAbi = new Field(5, abi, "right", " ");
	

	
	this.date = new Date();
	this.dateString = "";
	this.dateString += this.date.getDate().toString();
	if(new Number(this.date.getMonth()+ 1).toString().length ==2)
		this.dateString += new Number(this.date.getMonth()+ 1).toString();
	else
		this.dateString += "0".concat(new Number(this.date.getMonth()+ 1).toString());
	this.dateString += this.date.getFullYear().toString().substr(2,4);
	this.dateField = new Field(6,this.dateString);
	this.nomeSupportoField = new Field(20,"", "right", " ");
	this.campoADisposizioneField = new Field(6, "", "right", " ");
	this.fieldEmpty59 =  new Field(59, "", "right", " ");
	this.fieldEmpty7 =  new Field(7, "", "right", " ");
	this.fieldEmpty2 =  new Field(2, "", "right", " ");
	this.fieldDivisa =  new Field(1, "E", "right", " ");
	this.fieldEmpty1 =  new Field(1, "", "right", " ");
	this.fieldNonDisp =  new Field(5, "", "right", " ");
	
	this.testa = new Record();
	this.testa.addField(this.fieldEmpty);
	this.testa.addField(this.fieldTipoRecord);
	this.testa.addField(this.fieldSia);
	this.testa.addField(this.fieldAbi);
	this.testa.addField(this.dateField);
	this.testa.addField(this.nomeSupportoField);
	this.testa.addField(this.campoADisposizioneField);
	this.testa.addField(this.fieldEmpty59);
	this.testa.addField(this.fieldEmpty7);
	this.testa.addField(this.fieldEmpty2);
	this.testa.addField(this.fieldDivisa);
	this.testa.addField(this.fieldEmpty1);
	this.testa.addField(this.fieldNonDisp);
	
	console.log(this.testa.toCBI());
}
module.exports = TestaBuilder;
