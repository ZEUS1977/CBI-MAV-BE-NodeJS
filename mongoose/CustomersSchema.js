var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var url = "mongodb://localhost:27017/flussi_bancari";
var options = {
  user: 'test',
  password: 'test'
}

mongoose.createConnection(url, options);
var Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

var customerSchema = Schema({
  _id:  {type:ObjectIdSchema, default: new ObjectId()},
  UserName: String,
  Nome: String,
  Cognome: String,
  RagioneSociale: String,
  CodiceFiscale: String,
  PartitaIVA: String,
  SettoreAzienda:  String,
  FatturazioneElettronica: String,
  IndirizzoFatturazione: String,
  CivicoFatturazione: String,
  CAPFatturazione: String,
  ComuneFatturazione: String,
  SiglaProvinciaFatturazione: String,
  Email: String,
  Password: String,
  InsertDate:  { type: Date, default: Date.now }
});


module.exports = {
    saveCustomer:  function (userDatas){

          var Customer = mongoose.model('Customer', customerSchema);
          var user = new Customer(userDatas);
          user.save(function (err) {
            if (err) {
              console.log(err);
              return;
            } else {
              console.log('Customer with datas: ' + JSON.strigify(userDatas) + ' saved');
            }
          })
      }
}
