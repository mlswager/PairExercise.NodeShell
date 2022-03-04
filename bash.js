// Node.js program to demonstrate the
// process.cwd() Method
const pwd = require("./pwd")
const ls = require("./ls")
// output a prompt
process.stdout.write("prompt > ");

// the stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); // remove the newline
  
  if (cmd === "pwd") {
    pwd
  } else if (cmd === "ls"){
    ls()
  }
   else {
    process.stdout.write("you typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
