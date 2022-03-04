// Node.js program to demonstrate the
// process.cwd() Method
const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl")
// output a prompt
process.stdout.write("prompt > ");

// the stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  let cmd = data.toString().trim().split(" "); // remove the newline

  if (cmd === "pwd") {
    pwd;
  } else if (cmd[0] === "ls") {
    ls();
  } else if (cmd[0] === "cat") {
    cat(cmd[1]);
  } else if (cmd[0] === "curl") {
    curl(cmd[1]);
  } else {
    cmd = cmd.join(" ");
    process.stdout.write("you typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
