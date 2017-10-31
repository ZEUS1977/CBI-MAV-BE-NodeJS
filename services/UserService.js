var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://test:test@localhost:27017/flussi_bancari";

module.exports = {


	insert: function (userDatas){
		MongoClient.connect(url, userDatas, function(err, db) {
		  if (err){
			 console.log("Error conetting to DB!");
		 }
			else{
			  db.collection("customers").insert(userDatas, function(err, res) {
			    if (err){
			    	console.log("Error inserting user datas!");
						return 0;
					}else{
			    	console.log("Number of users inserted: " + res.insertedCount);
						return res.insertedCount;
					}
			    db.close();
			  });
			}
		});
	}


}
