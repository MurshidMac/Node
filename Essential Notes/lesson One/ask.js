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
    return ()=>{
        process.stdout.write(`\n\n ${i}`);
        process.stdout.write("Done next question\n");
    }
}

/**
 * simillary some more code that uses without loops
 */
 var askquestion= questions.filter(function (question){
    return question.length>1;
 });
askquestion;



// this should return the values in the array
/*
function askingQuestions(questions, item, index){
    return questions.forEach(function (item, index, questions){
        console.log(item, index)
    });
}

console.log(askQuestions(questions, 0, 0));
*/












