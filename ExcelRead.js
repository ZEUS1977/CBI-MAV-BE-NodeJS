var fs = require('fs');
var XLSX = require('xlsx');
var TestaBuilder = require("./builders/TestaBuilder.js");

var wb = XLSX.readFile('input_complex_data.xlsx');
var data = XLSX.utils.sheet_to_json(wb.Sheets.Foglio1);
//console.log(data);
var totale = new Number(0);
var importo = new Number(0);

var testaCreated = false;

for(var record in data){

  if(!testaCreated){
	  var iban = data[record]['IBAN_Mittente'];
	  var abi = iban.substring(5,10);
	  new TestaBuilder(data[record]['Codice_SIA'], abi);
	  testaCreated = true;
  }
	  	
  //totale mavs	
  importo = data[record]['Importo_MAV'].replace(',','.');
  //console.log(importo);
  totale += parseFloat(importo);
  
}
console.log(totale.toFixed(3));