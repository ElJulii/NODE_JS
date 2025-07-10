// entrance arguments example [0] = node, [1] = file to be executed and [2...] rest of commands
console.log(process.argv)

// control the process and exit
// process.exit(0) //when there is no errors
// process.exit(1) // when there are errors

// it says from which folder we are executing

console.log(process.cwd())

// field variable
console.log(process.env.MATEO) // it works to send store a sting value on the console next to
