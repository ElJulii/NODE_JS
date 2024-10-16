# NODE_JS
## What is node? 
It is a files where we write js code.
## How do we create it?
First we create a js file, the we write js code and on the console we write: node  name_of_file.js

`const x = 'Hello world!';`

![](https://github.com/ElJulii/NODE_JS/blob/main/imgs/node_helloWorld.png)

## common js import and export 
This is the common way to export and import functions or variables. However, nowadays it no recommended to use it.
All the files js are already made to work with common js, so if we want to force these files. we write in one file *name_file.cjs* instead of just *name_file.js*. Files with examples.
**one_cjs**.

## ME modules
If we want to use with node.js, we need to name our files with **.mjs** termination. This is the best way to export and import modules. it is very simple, just to add *export* in the beginning of the function, and in the importer file, just `import {name_function} from 'path/file'`:

### No just one import

![](https://github.com/ElJulii/NODE_JS/blob/main/imgs/Screenshot%202024-10-15%20135443.png)

**two_EM_modules**
## native modules
### OS System
We can access to the properties of our computer. These can be, operating system, memory or even time that our computer has TURNED UP. We can access with `const os = require('node:os')`.

### fs file system
Easy way to get informatin of files; like size in bytes or even if it is a folder or not.
`const fs = require('node:fs');`.

### fs  reading files
Two method to read files:
`readFileAsync(PATH, 'utf-8')`: With this code we will just get async readability, with the order already defined.
`readFile(PATH, 'utf-8', CallBack)`: Here we can work with call backs that will be executed just when the finish read the files, meanwhile they continue with the rest of the code.

### fs reading files with PROMISES
Instead of `const fs = requite('node:fs')` wi will use `const fs = requite('node:fs/promises')`. New it will be easier to read files, avoiding *callBacks*.

### fs reading files with async await
WE two forms:
- Using *ME modules* that we just need to import the readFile and just merge con with *await*.
- Using *Common modules*: Here we just to use a IIFE (Immediately Involved Function expression) that will be *async*:
`(  async () => {} )()`

More info: **native modules**.

