 let box=document.querySelector("body");
let btn=document.querySelector(".toggle-checkbox");

let mode="white"
 
btn.addEventListener( "click",()=>{
    if(mode=="white"){
         mode="black"
        box.classList.add("black");
        box.classList.remove("white")
    }
    else if(mode=="black")
    {
        mode="gray"
        box.classList.add("gray")
        box.classList.remove("black")
    }

    else {
        mode="white"
        box.classList.remove("gray")
        box.classList.add("white")
    }
 

})