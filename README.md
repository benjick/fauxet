[![Build Status](https://travis-ci.org/benjick/fauxet.svg?branch=master)](https://travis-ci.org/benjick/fauxet)

```
npm install --save fauxet
```

```js
import { tap } from 'fauxet';

Promise.resolve('Mjau')
  .then(tap('Value:')) // Value: Mjau
  .then(val => console.log(val)); // Mjau
```

```js
import { tap } from 'fauxet';

const log = tap('Logged:')
const myString = 'bar';
log(myString) // Logged: bar
```
