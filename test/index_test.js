import { tap } from '../lib/index';
import { strictEqual } from 'assert';

const someObject = {
  hello: {
    can: {
      you: {
        hear: 'me?',
      },
    },
  },
};

const someArray = [1, 2, 3, 4, 5, [1, 2, [1, 2, 3]]];

const someFunction = function hello() {
  return 'can-we-fix-it';
};

const someSymbol = Symbol('foo');

describe('the tap function', () => {
  it('with a string', () => {
    const value = 'Hello';
    strictEqual(tap()(value), value);
  });
  it('with an object', () => {
    strictEqual(tap()(someObject), someObject);
  });
  it('with an array', () => {
    strictEqual(tap()(someArray), someArray);
  });
  it('with a bool', () => {
    strictEqual(tap()(true), true);
  });
  it('with null', () => {
    strictEqual(tap()(null), null);
  });
  it('with a symbol', () => {
    strictEqual(tap()(someSymbol), someSymbol);
  });
  it('with a function', () => {
    strictEqual(tap()(someFunction), someFunction);
  });
});
