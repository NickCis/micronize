# micronize

> Simple way of enhacing a function with Zeit's [Micro](https://github.com/zeit/micro) framework.

It's particullarly usefull for severless environment (such as [zeit's now](https://zeit.co/now) and [aws lamda](https://aws.amazon.com/es/lambda/)) 

## Install

```
$ npm install --save micro micronize
```

## Usage

```js
const { send } = require('micro');
const micronize = require('micronize');

module.exports = micronize((req, res) => send(res, 200, 'Hello from micro'));
```


## License

MIT © [Nicolas Cisco](https://nckweb.com.ar)
