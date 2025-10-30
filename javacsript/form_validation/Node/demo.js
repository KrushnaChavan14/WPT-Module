const fs=require('fs');

fs.writeFile("myfile.txt","this is my text file",()=>{
    console.log("write operation completed");
});//async
console.log("After writing into file");
