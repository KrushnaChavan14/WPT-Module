const fs=require("fs");

fs.readFile("myfile.txt",(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(data.toString());
    }
});

console.log("after reading file");