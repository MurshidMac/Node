// In this lesson we will discuss some of the basic commands that we can run with the Terminal Striagt Away
// We will be mainly dicussing about the Child process in the Node JS
// for More Info https://nodejs.org/api/child_process.html
// for the basic of this course we will discuss about the JS functionalities such as const and var and let
var exec = require('child_process').exec;       // requiring function for the files // this thing has the execute function in the bottom

exec("firefox https://www.google.com");         // this will execute the line with default browser
exec("gnome-terminal");                         // this for instatiating an terminal session
exec("nautilus");                              // this execute a session of the nautilius-explorer option
exec("dir");

// we recive a ls call from the terminal
exec("gnome-terminal ls", function (err,stdout ) {
    if(err){
        throw err;
    }
    console.log("Listing Finished ");
    console.log(stdout);
});                                                // this can be a mean to hack any system in which node is installed
                                                    // if there any execute errors in the argument it will be the first argument                                              

