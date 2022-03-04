const fs = require("fs");

module.exports = function (cmd) {
  fs.readFile(`./${cmd}.js`, "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files);
      process.stdout.write("\nprompt > ");
    }
  });
};
