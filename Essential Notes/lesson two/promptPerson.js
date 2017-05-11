// we will be considering some wrapper like readline()
// its best to see the doc https://nodejs.org/api/readline.html
var read= require('readline');              // this is to require the readline function in NodeJS
var rl= read.createInterface(process.stdout, process.stdin);    // this is to maintain the listner Object with readline

var JSObjectPerson={
    name: '',
    charactors:[]
};                              // JS object to Store values    

rl.question("What is your name? ",function (anwser){
    JSObjectPerson.name=anwser;                                             // I am setting the name of the function
    rl.setPrompt(`What would be ${JSObjectPerson.name} say`);               // template String    
    //console.log(anwser);
    rl.prompt();                                                            // this will prompt for user input

    rl.on('line',function (saying){
        console.log(saying.trim());
    });                                                          // this takes a new line function            

});                             // a question to be asked
//console.log(read);            // this is just to check the functions related to the readline Module

