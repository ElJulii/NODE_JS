# NODE_JS
## What is node? 
It is a field where we write js code.

## How do we create it?
First we create a js file, the we write js code and on the console we write: node  name_of_file.js

## Global or window?

when we use **node**. We must use **globalThis** instead of **window** because window will just work with the browser. /class-1/index.js

**console.log()** comes from globalThis!:

`globalThis.console.log('Hello world!')`

## common js + use the name of the function OBLIGATED

//folder class-1/cjs

sum.js
```
function sum(a, b) {
    return a + b;
}

module.exports = {
    sum
}
```

index.js
```
const {sum} = require('/sum');

console.log(sum(1, 2));
```

## mjs (The newest way to export and the one that is recommended)

//folder class-1/mjs

The file is declared with **.mjs**. It is even easier to use and understand. Example:

sum.mjs
```
export function sum(a, b) {
    return a + b;
}

```

index.mjs
```
import {sum} from 'class-1/sum.mjs'

console.log(sum(1, 2));
```

## Operative System (OS)

We know about the os requiring the `node:os`. 
`const os = require('node:os');`

check the information with os. Folder class-1/1-os-info.js

- platform (name of os)
- release (operative system version)
- architecture (x64 or x32)
- freemem and totalmeme (The free and total memory space)

## File system (fs)

Here we use `readFileSync('name of file', 'utf-8') ` and `readFile()`.

Sync is going to wait to finish to start other actions. and `readFile()` will work by itself.

## Path

We can create or get the name of a file. `const path = require('node:path')`

## Process
folder 7-process.js

We can access the properties of the consola or search with the help of arguments of the process:

- `process.argv[]` - it takes the value from the console .
- `process.exit(0)` - code 0 you leave with no errors and with code 1 with errors.
- `process.env.MATEO` - it stores a value in MATEO from the console. In linux we use `MATEO=value` and with windows 

```
$env:MATEO = "pene"
node folder

```

## npm (node package manager)

This manager helps to manage packages and extension for our projects. It works also with the console to init the program and create a package.json that will stores all the dependencies.

`npm init`

## http

Here it is important to create a server and a http request and receive. So we first create the `const http = require('node:http')`. And then we must create the server with `const server = createServer((req, res) => {})`

We have an useful command that can change the editions of my code with a life server without having to rerun the code: 
```
bash node --watch class-2/1-http.js 

```

As alternative we have nodemon:

we install nodemon as:
```npm install nodemon -D ```

Then in json in Scripts we set as:
`dev: "nodemon index.js"`

## standard

This extension is for helping us to write a better code with correct spaces, we need to also enable and extension called 'ESLint' and in the package json we need to add:

```
// "eslintConfig": {
  //   "extends": "standard"
  // },

```

## Express

It is one of the most used framework with node Js. So it is so important to us to learn it. We can install it like this: 
``` 
npm install express -E

```

## middleware

It a process that helps us to arrange the code better when we make requests

## API REST (Representational State Transfer)

It is a software architecture used to build APIs

## Validate DATA (string, number...) with ZOD

ZOD is a Type-script validation library. We can validate schemas, data from **string**.

We install ZOD

``` 
npm install zod -E 
s
```

### POST, PUT, PATCH

- **POST:** Create an element or resource /movies.

- **PUT:** Update an element totally or create it if this one does not exist /movies/id.
- **PATCH:** Update an element partially /movies/id.

### CORS error:

This an error that happens when we are asking or making requests to other PORT from another one.

One good way to solve this error we add to the method we want this

` response.header('Access-Control-Allow-Origin', *)`

The symbol * means that all the external urls are allow to make requests to the origin url, or if we want just one, we can put it instead.

` response.header('Access-Control-Allow-Origin', 'http:localhost:8080')`

This method simple solution works just with methods: GET, HEADER, POST. But with the methods PUT, PATCH and DELETE, we need an OPTION to access.

` response.header('Access-Control-Allow-Origin', 'http:localhost:8080')`

And also we need to mention witch methods are going to be used.

``` 
response.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, DELETE')
response.send(200)

```

we can install a middleware ` npm install cors -E ` and this solves everything instead of us and we will not do what it was written upon. However this middleware puts everything with *.

` app.use(core()) ` 

The best to use this is like this:

```
const cors = require('cors')

app.use(cors({
  origin: (origin, callback) => {
    const ACCEPTED_ORIGINS = [
      'http://localhost:8080',
      'http://localhost:1234',
      'https://movies.com',
      'https://midu.dev'
    ]

    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
}))

```

## module Js 

if we want to to us  **module Js** in your js files. In your package js just hast to add

` { "type" : "module" } `

So now The code environment will ask for **module js** always.

### import JSON with module js

With json we have two way to import it, with **fs** and :
Example fs:
`const moviesJson = JSON.parse(fs.readFileSyc('./movies.json', 'utf-8'))`

Example createRequire from modules: 

```
const { createRequire } from 'node:module'
const rq = createRequire(module.import.url)
const moviesJSON = rq('./movies.json')
```
## DATA BASE!

As we work with postgreSQL, we can work with `import Pool from 'node:pg'`. So we can add a pool (set of data) with information of our database.

```
export const pool = new Pool ({
  host: 'localhost'
  user: 'user',
  database: 'name data base'
  password: 'password',
  port: 5432
})

```
### Insert or create query

we can create a query using

`const { rows } = pool.query(query, [data, to, insert, in, query])` 
