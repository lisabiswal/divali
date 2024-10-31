let submit=document.getElementById("submit-btn");
let inp=document.getElementById("inp-btn");
let para=document.getElementById("para")
// let arr=[
        
// ]

// function randomMess(){
    
// }

submit.addEventListener("click",()=>{
    let mess=document.getElementById("inp-btn").value;
    para.innerText=`Wishing you a joyful and prosperous Diwali, ${mess}! May this festival of lights bring you happiness, health, and success. ✨🪔`;
});