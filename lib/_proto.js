Date.prototype.getDOY = function() {
	//console.log(this);
	var onejan = new Date(this.getFullYear(),0,1);
	//console.log(onejan);
	return Math.ceil((this - onejan) / 86400000);
}