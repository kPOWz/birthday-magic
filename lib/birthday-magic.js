require('./_proto');
var ranges = require("./_ranges");
var birthstones = require("./_birthstones.json");
var flowers = require("./_flowers.json");



//substack pattern to return a single function
var BirthdayMagic = exports = module.exports = function BirthdayMagic(month, day, year, opts){

  var defaults = { prettyPrint: false };
  // prepare the options for Object.create
  var options = {};
  for(var i in opts){
    options[i] = { 
      value: opts[i], 
      enumerable: true, 
      writeable: true, 
      configurable: true
    };
  }
  var optsFinal = Object.create(defaults, options);

  this.month = month;
  this.day = day;
  this.year =year;
  this.opts = optsFinal;

};

BirthdayMagic.prototype = {

  planet: function() {
    var planet = birthdayPlanet(this.month, this.day);
    return this.opts.prettyPrint ? planet.prettyPrint() : planet;
  },
  gemstone: function() {
    var birthstone = birthdayStone(this.month, this.day);
    return this.opts.prettyPrint ? birthstone.prettyPrint() : birthstone;
  },
  sign: function() { 
    var sign = birthdayZodiacSign(this.month, this.day);
    return this.opts.prettyPrint ? sign.prettyPrint() : sign;

  },
  flower: function() { 
    var flower = birthdayFlower(this.month);
    return this.opts.prettyPrint ? flower.prettyPrint() : flower;

  },
  all : function() {
  	return {
		'planet': birthdayPlanet(this.month, this.day),
		'gemstone': birthdayStone(this.month),
		'sign' : birthdayZodiacSign(this.month, this.day),
		'flower' : birthdayFlower(this.month)	
	 }
  },
};

function Planet(month, day){ 
  this.day = day;
  this.month = month;
  this.name = undefined;
  this.rangeType = 'tropical zodiac planetary month';

}

Planet.prototype = {
  prettyPrint : function(){
      return 'birthday planet : ' + this.name;
  },

  beginDate: function(planetRange){
    return ranges.planetRanges[planetRange][0] 

  },
  endDate : function(planetRange){
    return ranges.planetRanges[planetRange][1] 

  }
}

function ZodiacSign(month, day){
  this.day = day;
  this.month = month;
  this.name = undefined;
  this.rangeType = 'tropical zodiac planetary month';

}

ZodiacSign.prototype = {
  prettyPrint : function(){
      return 'zodiac sign : ' + this.name;
  },

  beginDate: function(zodiacRange){
    return ranges.zodiacRanges[planetRange][0] 

  },
  endDate : function(zodiacRange){
    return ranges.zodiacRanges[planetRange][1] 

  }
}

function Birthstone(month, day){
  this.day = day;
  this.month = month;
  this.name = undefined;
  this.rangeType = 'Gregorian calendar month';
}

Birthstone.prototype = {
  prettyPrint : function(){ 
      return 'birthstone : ' + this.name;
  }
}

function Flower(month, day){
  this.day = day;
  this.month = month;
  this.name = undefined;
  this.rangeType = 'Gregorian calendar month';
}

Flower.prototype = {
  prettyPrint : function(){
      return 'birthday flower : ' + this.name;
  }
}

function birthdayPlanet(month, day) {
  
  //birthday month and year must be number
  if((typeof month !== "number") || (typeof day !== "number"))
  	return;

  var planet = new Planet(month, day);
  
  //get day of year by extending proto
  var birthDay = new Date(2013, month -1, day);
  var dayOfYear = birthDay.getDOY();

  for(planetRange in ranges.planetRanges){
  	if(dayOfYear >= planet.beginDate(planetRange) 
  			&& dayOfYear < planet.endDate(planetRange)) {

  	  planet.name = ranges.planetRanges[planetRange][2]; 
  		return planet;  
  	} 
  }
  //if less than 1
  return 'not sure';  
};

function birthdayZodiacSign(month, day) {
  
  //birthday month and year must be number
  if((typeof month !== "number") || (typeof day !== "number"))
  	return;
  
  var zodiacSign = new ZodiacSign(month, day);

  //get day of year by extending proto
  var birthDay = new Date(2013, month -1, day);
  var dayOfYear = birthDay.getDOY();

  for(zodiacSignRange in ranges.zodiacRanges){
  	if(dayOfYear >= zodiacSign.beginDate(zodiacSignRange) 
  			&& dayOfYear < zodiacSign.endDate(zodiacSignRange)) {
  	
      zodiacSign.name = ranges.zodiacRanges[zodiacSignRange][2];
  		return  zodiacSign;
  	} 
  }
  return 'not sure';  
};

function birthdayStone(month) {
  var birthstone = new Birthstone(month, undefined);
  birthstone.name = birthstones[month] || 'not sure';
	return birthstone;
	
};

function birthdayFlower(month) {
  var flower = new Flower(month, undefined);
  flower.name = flowers[month] || 'not sure';
	return flower;
	
};