# MayBee

<img src="media/logo.png" width="250" />

>  Safe chaining of object properties and functions using ES2015 Proxy.

![Travis](http://img.shields.io/travis/Wildhoney/MayBee.svg?style=flat-square)
&nbsp;
![npm](http://img.shields.io/npm/v/maybee.svg?style=flat-square)
&nbsp;
![License MIT](http://img.shields.io/badge/License-MIT-lightgrey.svg?style=flat-square)

* **npm:** `npm install maybee --save`

---

## Getting Started

**Note:** Requires [Proxy support](https://kangax.github.io/compat-table/es6/#test-Proxy).

```javascript
import {safeguard, isUndefined, isNull} from 'maybee';

const person = safeguard({ name: 'Adam', age: null });

console.log(person.name); // Adam
console.log(isNull(person.age)) // true
console.log(isUndefined(person.getNames().firstName)) // true
console.log(isUndefined(person.with.a.long.non.existent.property)) // true
```

See [unit tests](https://github.com/Wildhoney/MayBee/blob/master/test/may-bee.test.js) for further examples &mdash; however considering a primitive isn't returned, then you can continue chaining as required &mdash; this is in anticipation of an eventual value, and therefore primitives are returned when they exist.

## Undefined!

Once `MayBee` finds a primitive value in your object, then all of the `Proxy` witchery is stopped from there on in.

For example, given the `person` above, we can extend infinitely on unknown properties/functions, but as soon as a primitive has been reached, then normal JavaScript rules are abided by:

```javascript
// √
console.log(person.with.an.unknown().property.and.a().function.or.two);

// TypeError: person.name.on is undefined √
console.log(person.name.on.a.known().property);
```

This behaviour makes it easier to stick closely with the JavaScript spec &mdash; otherwise `MayBee` would have to introduce a non-standard function for when you wanted the *value* rather than another `Proxy` &mdash; such as `getValue()` &mdash; ugh!

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

## Example

![Screenshot](media/screenshot.png)

Try out the [interactive console example on Heroku](http://maybee-app.herokuapp.com/)!
