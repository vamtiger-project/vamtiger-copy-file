# VAMTIGER Copy File
[VAMTIGER Copy File](https://github.com/vamtiger-project/vamtiger-copy-file) copies a file for a defined __**source**__ and __**destination**__ path.
<br>
<img src=asset/image/vamtiger-copy-file.svg style="max-height: 350px; background-color: #f0f0f0; border-radius: 3px; padding: 10px" width=400>

## Installation
[VAMTIGER Copy File](https://github.com/vamtiger-project/vamtiger-copy-file) can be installed using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/):
```bash
npm i vamtiger-copy-file 
```
or
```bash
yarn add vamtiger-copy-file
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Copy File](https://github.com/vamtiger-project/vamtiger-copy-file):
```javascript
import copyFile from 'vamtiger-copy-file';
```
or
```javascript
const copyFile = require('vamtiger-copy-file').default;
```
[VAMTIGER Copy File](https://github.com/vamtiger-project/vamtiger-copy-file) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise):
```javascript
const params = {
    source: 'some/source/file/path',
    destination: 'some/destination/file/path'
};

copyFile(params)
    .then(doSomething)
    .catch(handleError);
```
Since [VAMTIGER Copy File](https://github.com/vamtiger-project/vamtiger-copy-file) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), the result can be more conveniently referenced within an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function):
```javascript
const params = {
    source: 'some/source/file/path',
    destination: 'some/destination/file/path'
};

await copyFile(params);
```
