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
