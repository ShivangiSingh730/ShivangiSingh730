const promise1=new Promise(function(resolve,reject)
{
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({success:"javascript",password:"123"});
        }
        else{
            reject("error:");
        }
    },1000);
});promise1.then((user)=>{
    console.log(user);
}).catch((pass)=>{
    console.log(pass);
}).finally();
