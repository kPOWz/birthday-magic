require('./_proto');
var ranges = require("./_ranges");
var birthstones = require("./_birthstones.json");
var flowers = require("./_flowers.json");

//substack pattern to return a single function
var BirthdayMagic = exports = module.exports = function BirthdayMagic(month, day, year){
  this.month = month;
  this.day = day;
  this.year =year;
};

BirthdayMagic.prototype = {

  planet: function() { return'birthday planet : ' + birthdayPlanet(this.month, this.day)},
  gemstone: function() { return 'birthstone : ' + birthdayStone(this.month)},
  sign: function() { return 'zodiac sign : ' + birthdayZodiacSign(this.month, this.day)},
  flower: function() { return 'birthday flower : ' + birthdayFlower(this.month)},
  all : function() {
  	return {
		'planet': birthdayPlanet(this.month, this.day),
		'gemstone': birthdayStone(this.month),
		'sign' : birthdayZodiacSign(this.month, this.day),
		'flower' : birthdayFlower(this.month)	
	 }
  }

};

function birthdayPlanet(month, day) {
  
  //birthday month and year must be number
  if((typeof month !== "number") || (typeof day !== "number"))
  	return;
  
  //get day of year by extending proto
  var birthDay = new Date(2013, month -1, day);
  var dayOfYear = birthDay.getDOY();

  for(planet in ranges.planetRanges){
  	  	
  	if(dayOfYear >= ranges.planetRanges[planet][0] 
  			&& dayOfYear < ranges.planetRanges[planet][1]) {
  	
  		return ranges.planetRanges[planet][2];  
  	} 
  }
  return 'not sure';  
};

function birthdayZodiacSign(month, day) {
  
  //birthday month and year must be number
  if((typeof month !== "number") || (typeof day !== "number"))
  	return;
  
  //get day of year by extending proto
  var birthDay = new Date(2013, month -1, day);
  var dayOfYear = birthDay.getDOY();

  for(zodiacSign in ranges.zodiacRanges){
  	if(dayOfYear >= ranges.zodiacRanges[zodiacSign][0] 
  			&& dayOfYear < ranges.zodiacRanges[zodiacSign][1]) {
  	
  		return ranges.zodiacRanges[zodiacSign][2];  
  	} 
  }
  return 'not sure';  
};

function birthdayStone(month) {
	return birthstones[month] || 'not sure';
	
};

function birthdayFlower(month) {
	return flowers[month] || 'not sure';
	
};