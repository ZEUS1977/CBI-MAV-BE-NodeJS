var fs = require('fs');
var XLSX = require('xlsx');
var TestaBuilder = require("./builders/TestaBuilder.js");
var Record14Builder = require("./builders/Record14Builder.js");

var wb = XLSX.readFile('input_complex_data.xlsx');
var data = XLSX.utils.sheet_to_json(wb.Sheets.Foglio1);
//console.log(data);
var totale = new Number(0);
var importo = new Number(0);

var testaCreated = false;
var testaIM;
var record14;
var tracciato = "";
var abiCreditore = "";
for(var index in data){

  if(!testaCreated){
	  var iban = data[index]['IBAN_Mittente'];
	  abiCreditore = iban.substring(5,10);
	  testaIM = new TestaBuilder(data[index]['Codice_SIA'], abiCreditore);
	  console.log(testaIM.testa.toCBI());
	  testaCreated = true;
	  tracciato += testaIM.testa.toCBI() + "\n";
  }
  
  record14 = new Record14Builder(index, data[index]['Data_Scadenza_MAV'], data[index]['Importo_MAV'], abiCreditore);
  console.log(record14.record14);
  tracciato += record14.record14.toCBI() + "\n";
	  	
  //totale mavs	
  importo = data[index]['Importo_MAV'].replace(',','.');
  //console.log(importo);
  totale += parseFloat(importo);
  
}
console.log(tracciato);

fs.writeFile("/tmp/tracciato.txt", tracciato, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
})

console.log(totale.toFixed(3));