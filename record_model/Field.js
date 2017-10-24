/**
 * Object for fields of every record in a CBI file, using Module design pattern
 */

function Field(length, val){
	this.lenght = length;
	this.val = val;
}

Field.prototype.toString = function(){
	return this.val + this.length;
};
module.exports = Field;