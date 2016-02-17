# MayBee

<img src="media/logo.png" width="250" />

>  Safe chaining of object properties and functions using ES2016 Proxy.

![Travis](http://img.shields.io/travis/Wildhoney/MayBee.svg?style=flat-square)
&nbsp;
![npm](http://img.shields.io/npm/v/maybee.svg?style=flat-square)
&nbsp;
![License MIT](http://img.shields.io/badge/License-MIT-lightgrey.svg?style=flat-square)

* **npm:** `npm install maybee --save`

---

## Getting Started

```javascript
import {safeguard, isUndefined, isNull} from 'maybee';

const person = safeguard({ name: 'Adam', age: null });

console.log(person.name); // Adam
console.log(isNull(person.age)) // true
console.log(isUndefined(person.getNames().firstName)) // true
```
