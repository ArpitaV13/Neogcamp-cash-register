var inputBillAmt=document.querySelector("#input-bill").value;
var inputBtn=document.querySelector("#next-btn");
var errorDisplay=document.querySelector("#errorDisplay");
var checkAmt=document.querySelector("#check-amt").value;
var checkBtn=document.querySelector("#check-btn");
var showAmt=document.querySelector(".return");


var cashPaid=document.querySelector('.cash-paid');


inputBtn.addEventListener('click',()=>{
        inputBtn.style.display="none";
        cashPaid.style.display="block";
   
})

checkBtn.addEventListener('click',()=>{
    showAmt.style.display="block";
})

   
