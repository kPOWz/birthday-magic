# Birthday Magic

Magically generates common birthday lore. Possibly useful for clueless (/thoughtful?) birthday gift-givers.


## Platform support

ECMAScript, 5th Edition


## Example

```js
var BirthdayMagic = require("./birthday-magic");
var BirthdayMagicObj = new BirthdayMagic(08, 09, 2013);

var allMagic = BirthdayMagicObj.all();

// => { planet: 'Sun',
//  gemstone: 'August',
//  sign: 'Leo',
//  flower: 'Gladiolas,Poppy' }

```


## Installing

Install from NPM:

    $ npm install birthday-magic
