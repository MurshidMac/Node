var fs = require("fs"); // require the fs module

var read = fs.readFileSyncSync("./lib/sayings.md", "UTF-8");  // this will be text

console.log(read);
