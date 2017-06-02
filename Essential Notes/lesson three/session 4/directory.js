var fs = require('fs');

if (fs.existsSync("lib")) {
    console.log("Directory Already there");
} else {

    fs.mkdir("lib", function (err) {
        if (err) {
            console.log("throwing an error" + err);
        }
        else {
            console.log("Directory Created");
        }
    });

}