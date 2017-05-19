// spawn runs only for one time and it stops when there withing a specific time
var spawn = require("child_process").spawn; // spawn is also in the childprocess module

var cp= spawn("node",["alwaysTalking"]);    // we call what is the type of command should be execute first and where to in the array

cp.stdout.on('data', function (data) {
    console.log(`STOUT: ${data.toString().trim()}`)
});
cp.on('close', function (){
    console.log("child.Process has ended");
    process.exit();
});

setTimeout(function (){
    cp.stdin.write("stop");
}, 4000);