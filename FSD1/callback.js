const x =()=>{
    console.log("this is function x");
}
x()
const y=(callback)=>{
    callback()
    console.log("this is function y");
}
y(x);