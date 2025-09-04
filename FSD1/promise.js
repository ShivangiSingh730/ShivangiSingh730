let pro=new Promise((resolve,reject)=>{
 let s=10;
 if(s==8){
    resolve("operation is success");
 }
 else{
    reject("some issue|||||error");
 }
});
pro.then((data)=>{
console.log(data);
}).catch((error)=>{
 console.log(error);
});
