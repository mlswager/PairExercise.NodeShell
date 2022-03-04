// Node.js program to demonstrate the
// process.cwd() Method

// Include process module
const process = require("process");

const pwd = process.cwd();

// Printing current directory
// console.log("Current working directory: ", process.cwd());

// output a prompt
process.stdout.write("prompt > ");

// the stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); // remove the newline

  if (cmd === "pwd") {
    process.stdout.write("Current working directory: " + pwd);
    process.stdout.write("\nprompt > ");
  } else {
    process.stdout.write("you typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
