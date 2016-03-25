```
npm install --save fauxet
```

```js
import { tap } from 'fauxet';

myPromise().then(i => doSomething('foo', tap(i)));
// Logs i to console without having to expand the return statement
// and adding a console.log
```

```js
import { tap } from 'fauxet';
const myString = 'bar';
tap(myString, 'foo:') // "foo: bar" in the console
```
