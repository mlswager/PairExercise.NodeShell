const process = require("process");

const pwd = process.stdin.on("data", (data) => {
    const cmd = data.toString().trim(); // remove the newline
  
    if(cmd==="pwd"){
      process.stdout.write("Current working directory: " + process.cwd());
      process.stdout.write("\nprompt > ");
    }
  });

//   module.exports.pwd
module.exports = pwd