# SequenceTester

## Demo

#### Success

```js
let st = new SequenceTester([ 1, 2, 3 ]);

st.assert(1);
st.assert(2);
st.assert(3);

st.then(() => console.log('ok'));
```

#### Failure

```js
let st = new SequenceTester([ 1, 2, 3 ]);

st.assert(1);
st.assert(3);
st.assert(4);

st.catch(() => console.log('error'));
```

#### Type

```js
let st = new SequenceTester([ Boolean, Number, String ]);

st.assert(true);
st.assert(999);
st.assert('hehe');

st.then(() => console.log('ok'));
```

#### RegExp

```js
let st = new SequenceTester([ /^[ab]$/, /^[ab]$/ ]);

st.assert('a');
st.assert('b');

st.then(() => console.log('ok'));
```
