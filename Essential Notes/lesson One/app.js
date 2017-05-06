console.log(process.argv);          // Process Variable is store for any app with ARGV we can access the current process
                                    // Similary we can add values to this object by adding something like 
                                    // --user "murshid" --greeting "Murshid Say Hi"
                                    // This can be anything This is automatically added to process.argv variable during runtime
                                    // Ex node app.js --name MurshidHassen --age 18

// Here comes the magic of functional programming
// One Important Note always remember to Use Single Quotation Marks (No Double Quotations)
function grab(flag){                                            // this will take a greeting as a flag
    var index= process.argv.indexOf(flag);                      // here we are getting the index of the flag 
    return (index === -1) ? null : process.argv[index+1];       // we are checking weather the index equalls to negative else we are returning the     
}
var greeting =grab('--user');                                   // here I am passing the value
//console.log(variable);                                        // this should return us the index of the process function
var invitation= grab('--greeting');                 

if(!greeting||!invitation){
    console.log("the Process.argv is empty")
}else {
    console.log(`Hurray first of your functional programm is superb  ${greeting }  ${invitation}`)
}


