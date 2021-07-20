var inputBillAmt=document.querySelector("#input-bill");
var inputBtn=document.querySelector("#next-btn");
var errorDisplay=document.querySelector("#errorDisplay");
var checkAmt=document.querySelector("#check-amt");
var checkBtn=document.querySelector("#check-btn");
var showAmt=document.querySelector(".return");


var cashPaid=document.querySelector('.cash-paid');


inputBtn.addEventListener('click',()=>{
    hideError();
    if(Number(inputBillAmt.value)>0){
        inputBtn.style.display="none";
        cashPaid.style.display="block";
    }
    else{
        showError("Please enter the bill Amount");
    }
   
})

checkBtn.addEventListener('click',()=>{
    hideError();
    if(Number(checkAmt.value)>0){
        showAmt.style.display="block";
        checkBtn.style.display="none";
    }
    else{
        showError("Please enter a valid amount!")
    }
    
})

   
const notes=[2000,500,100,20,10,5,1];

function calculateReturn(inputBillAmt,checkAmt){
    
}
function showError(text){
    errorDisplay.style.display="block";
    errorDisplay.innerText=text;
}
function hideError(){
    errorDisplay.style.display="none";
}
