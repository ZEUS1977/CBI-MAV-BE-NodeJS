var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/flussi_bancari";

module.exports = {


	insertOne: function (userDatas){
		MongoClient.connect(url, userDatas, function(err, db) {
		  if (err)
			  throw err;

		  db.collection("users").insertOne(userDatas, function(err, res) {
		    if (err)
		    	throw err;
		    console.log("Number of users inserted: " + res.insertedCount);
		    db.close();
		  });
		});
	}


}
