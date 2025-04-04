// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require ("fs");

const content =" hello sir , this is file write asynchronously";

fs.writeFile("a.txt", content, (err)=>{
    if(err){
        console.loglog("erroe writing ti file ", err);
    }else{
        console.log("File written successfully");
    }
})