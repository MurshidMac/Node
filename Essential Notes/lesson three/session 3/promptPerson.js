// we will be considering some wrapper like readline()
// its best to see the doc https://nodejs.org/api/readline.html
// Use of %s and %j for are really important check for the DOC

var read= require('readline');              // this is to require the readline function in NodeJS
var rl= read.createInterface(process.stdout, process.stdin);    // this is to maintain the listner Object with readline
var fs= require("fs")
var JSObjectPerson={
    name: '',
    charactors:[]
};                              // JS object to Store values    

rl.question("What is your name? ",function (anwser){
    JSObjectPerson.name=anwser;
    
    fs.writeFileSync(JSObjectPerson.name+".md", `${JSObjectPerson.name}\n=========================\n\n`)
    
                                                 // I am setting the name of the function
    rl.setPrompt(`What would be ${JSObjectPerson.name} say ?`);               // template String    
    //console.log(anwser);
    rl.prompt();                                                            // this will prompt for user input

    rl.on('line',function (saying){
        JSObjectPerson.charactors.push(saying.trim());                             // we need to push the values to the arrays                                                                                    
        
        if(saying.toLowerCase().trim()=== 'exit' ){                                  // this where i stopped last
            rl.close();                             // we are stopping it here from continouing on
        }else {
            rl.setPrompt(`What else  ${JSObjectPerson.name} say ? ('exit') to leave`);
            rl.prompt();
        }
        console.log(saying.trim());
    });                                                          // this takes a new line function            

});                             // a question to be asked
//console.log(read);            // this is just to check the functions related to the readline Module
rl.on('close', function () {
    //rl.prompt(`${JSObjectPerson.name} with saying ${charactors}`)
    console.log("%s is a real person that says %j",JSObjectPerson.name, JSObjectPerson.charactors);                 //%s stands for a string to be prompted
    process.exit();                                                                                                 // %j replaces the next value with a json                
});
// json string
// readline is handy tool to use without requiring the process stdout and process stdin
// this can be a great tool to ask questions as well