var Field = require('../record_model/Field.js');
var Record = require('../record_model/Record.js');

function Record14Builder(progressivo, dataScadenza, importo, abiCreditore){
	
	this.fieldEmpty =  new Field(1, "", "right", " ");
	this.fieldTipoRecord = new Field(2, "14", "right", " ");
	this.fieldProgressivo = new Field(7, (parseInt(progressivo) +1).toString() , "right", " ");//PARTE DA ZERO MA IL FORMATO DEL TRACCIATO PREVEDE COME VALORE INIZIALE 1
	this.fieldEmpty12 =  new Field(12, "", "right", " ");
	this.dataScadenza = dataScadenza.split('/');
	this.fieldDataScadenza =  new Field(6, this.dataScadenza[0] + this.dataScadenza[1] + this.dataScadenza[2].substr(2,4), "right", " ");
	this.fieldCausale = new Field(5, "07000", "rigth", " ");
	this.fieldImporto = new Field(13, importo.replace(",","").replace('.',''), "left", "0");
	this.fieldSegno = new Field(1, "-", "right", "");
	this.fieldABICreditore = new Field(5, abiCreditore, "right", " ");
	
	this.record14 = new Record();
	this.record14.addField(this.fieldEmpty);
	this.record14.addField(this.fieldTipoRecord);
	this.record14.addField(this.fieldProgressivo);
	this.record14.addField(this.fieldEmpty12);
	this.record14.addField(this.fieldDataScadenza);
	this.record14.addField(this.fieldCausale);
	this.record14.addField(this.fieldImporto);
	this.record14.addField(this.fieldSegno);
	this.record14.addField(this.fieldABICreditore);
			
	console.log(this.record14.toCBI());
}
module.exports = Record14Builder;
