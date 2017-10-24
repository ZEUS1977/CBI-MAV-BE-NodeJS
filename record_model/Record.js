/**
 * 
 */
function Record(){
		this.fields = [];
}


Record.prototype.addField = function(field){
	this.fields.push(field); 
};

Record.prototype.toCBI = function(){
	var ret = "";
	for (var i = 0; i < this.fields.length ; i++) {
		var array_element =  this.fields [i];
		ret += array_element.val;
	}
	return ret;
};

module.exports = Record;