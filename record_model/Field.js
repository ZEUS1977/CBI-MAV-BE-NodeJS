/**
 * Object for fields of every record in a CBI file, using Module design pattern
 */

function Field(length, val, pad, charPad){
	this.lenght = length;
	this.val = val;
	if(val.length < length){
		if(pad == "right"){
			for(var i = 0; i < length - val.length; i++){
				this.val = this.val + charPad;
			}
		}else if(pad == "left"){
			for(var i = 0; i < length - val.length; i++){
				this.val = charPad + this.val;
			}
		}
	}else if(val.length > length){
		this.val = this.val.substr(0,length);
	}
}

Field.prototype.toString = function(){
	return this.val + this.length;
};
module.exports = Field;