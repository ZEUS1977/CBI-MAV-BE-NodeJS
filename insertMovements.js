var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/flussi_bancari";

module.exports = {
		

	insertMany: function (movements){
		MongoClient.connect(url, movements, function(err, db) {
		  if (err) 
			  throw err;
		
		  db.collection("movements").insertMany(movements, function(err, res) {
		    if (err)
		    	throw err;
		    console.log("Number of movements inserted: " + res.insertedCount);
		    db.close();
		  });
		});
	}
}
