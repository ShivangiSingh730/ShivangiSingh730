// create new promises with settimeout function 
const promiseone=new Promise(function(resolve,reject){
    //do settimeout task call settime function
    setTimeout(function(){
       console.log("asynchronous task is complete");
       resolve()
    },2000)
 })
 promiseone.then(function(){
   console.log("promise complete with resolve");
 }).catch(function(){
 
 })