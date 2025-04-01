// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output.


//Synchronous file Read
const fs = require("fs");

const data1 =fs.readFileSync("a.txt","utf-8");
console.log(data1);

const data2 = fs.readFileSync("b.txt","utf-8");
console.log(data2)

//////////////////////////////////////////////////////

//Asynchronous file read
fs.readFile('a.txt','utf-8',(err,data)=>{
    if(err){
        console.log("error reading file",err);
        return;
    }
    console.log("file contents- ",data);
});



////////////////////////////////////////////////////////

//expensive operations
console.log("Hello-1");

function time(){
    console.log("Hello-2");
}

setTimeout(time,5000);
console.log("Hello-3");

sum = 0;
for(let i=0; i< 1000; i++){
    sum += 1;
}

console.log("sum done");