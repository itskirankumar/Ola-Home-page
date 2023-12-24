let btn1=document.getElementById("btn1");
btn1.addEventListener("click", ()=>{
    let divinput=document.getElementById("in1").value;
    let divshow=document.getElementById("Bike-Amount");
    let BikeAmount=divinput*5;
    divshow.innerText=BikeAmount;
})

let btn2=document.getElementById("btn2");
btn2.addEventListener("click", ()=>{
    let divinput=document.getElementById("in2").value;
    let divshow=document.getElementById("Car-Amount");
    let carAmount=divinput*20;
    divshow.innerText=carAmount;
})

let btn3=document.getElementById("btn3");
btn3.addEventListener("click", ()=>{
    let divinput=document.getElementById("in3").value;
    let divshow=document.getElementById("Auto-Amount");
    let autoAmount=divinput*10;
    divshow.innerText=autoAmount;
})