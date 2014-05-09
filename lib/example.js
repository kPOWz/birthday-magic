var BirthdayMagic = require("./birthday-magic");
var BirthdayMagicObj = new BirthdayMagic(07, 09, 2014, { prettyPrint: true });

var planet = BirthdayMagicObj.planet();
console.log(planet);

var gemstone = BirthdayMagicObj.gemstone();
console.log(gemstone);

var sign = BirthdayMagicObj.sign();
console.log(sign);

var flower = BirthdayMagicObj.flower();
console.log(flower);

var all = BirthdayMagicObj.all();
console.log(all);
var allFlower= BirthdayMagicObj.all().flower;
console.log("all.flower type : " + (allFlower instanceof Array ? 'Array' : typeof allFlower));
console.log(allFlower);