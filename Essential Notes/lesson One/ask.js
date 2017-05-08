// standerd Inputs for JS file
// Using the process fucntion
// We can use the process.argv indexOf function to get the index with a special flag
//console.log("") // this is the standard output object of the JS
process.stdout.write("My Name is Murshid \n");  // this is the standard output Object of the Terminal
process.stdout.write("Murshid \n \nlest \n");    // this won't give us a new line charactor   
process.stdout.write("=====================")

// Here Comes the interesting Stuffs, Playing with Arrays

var questions = [
    "what is your name ?",
    "what is your favourite subject?",
    "what is your loving programming language ?"
];

var answers=[];
//()=> this means an annonymous funtion that returns the value in the object
function question(i){
    process.stdout.write(`Question : ${questions[i]}`);
    process.stdout.write("  >   ");
    //if(i===questions.length){
      //  break;
   // }
}

question(0);
// adding the listener or getting the realtime input from the terminal as 
// callback functions
// this is first Asynchronous Call from the node JS
/*
process.stdin.on('data',function(data){
    return process.stdout.write('Your answer '+ data.toString().trim()+ '\n');    // this line echos the Answer
});
*/

process.stdin.on('data',function (data){
    answers.push(data.toString().trim());              // we push the value to code
    if(answers.length<questions.length){               // this checks for remaining question in the array
        question(answers.length);                
    }else{
        process.exit();
    }
});
// adding a exit event in the process object
process.on('exit',function (){
    process.stdout.write("\n\n\n");
    process.stdout.write(answers[1],answers[2], answers[0]);
    process.stdout.write("\n\n\n");
});







/*
function questionAnnoynm(i){
    return ()=>{
        process.stdout.write(`\n\n ${questions[i]}`);
        process.stdout.write("Done next question\n\n");
    }
}
questionAnnoynm(1);
*/
/**
 * simillary some more code that uses without loops
 
 var askquestion= questions.filter(function (question){
    return question.length>1;
 });

question(1);

function question(i){
    process.stdout.write(`${i}`)
}
*/

// this should return the values in the array
/*
function askingQuestions(questions, item, index){
    return questions.forEach(function (item, index, questions){
        console.log(item, index)
    });
}

console.log(askQuestions(questions, 0, 0));
*/












