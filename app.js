var inputBillAmt=document.querySelector("#input-bill");
var inputBtn=document.querySelector("#next-btn");
var errorDisplay=document.querySelector("#errorDisplay");
var checkAmt=document.querySelector("#check-amt");
var checkBtn=document.querySelector("#check-btn");
var showAmt=document.querySelector(".return");
var noOfNotes=document.querySelectorAll(".noOfNotes");
var change=document.querySelector("#change");


var cashPaid=document.querySelector('.cash-paid');


inputBtn.addEventListener('click',()=>{
    hideError();
    if(Number(inputBillAmt.value)>0){
        inputBtn.style.display="none";
        cashPaid.style.display="block";
    }
    else{
        showError("Please enter the bill Amount");
        return;
    }
   
})

checkBtn.addEventListener('click',()=>{
    clearNotes();
    hideError();
    var billAmtInput=Number(inputBillAmt.value);
    var cashPaidAmt=Number(checkAmt.value);
    if(cashPaidAmt>0){
        if(!Number.isInteger(cashPaidAmt)){
            showError("Please enter a vaild Amount!")
            return;
        }
    }
    if(cashPaidAmt<billAmtInput){
        showError("please pay a valid Amount!");
        return;
    }
    else{
   
    calculateReturn(billAmtInput,cashPaidAmt);
    }

    
})

   
const notes=[2000,500,100,20,10,5,1];

function calculateReturn(billAmt,paidAmt){
    var returnAmt=paidAmt-billAmt;
    if(returnAmt<1){
        showError("No cash to be returned");
        return;
    }
    showAmt.style.display="block";

    for(var i=0;i<notes.length;i++){
        returnAmt=compare(returnAmt,notes[i],i);
    }

    
}
function compare(remainder,note,index){
    if(remainder>=note){
        var notesReturned=Math.floor(remainder/note);
        remainder=remainder-notesReturned*note;
        noOfNotes[index].innerText=`${notesReturned}`;
    }
    return remainder;
}

function clearNotes(){
    for(var notesReturned of noOfNotes){
        notesReturned.innerText="";
        showAmt.style.display="none";
    }
}


function showError(text){
    errorDisplay.style.display="block";
    errorDisplay.innerText=text;
}
function hideError(){
    errorDisplay.style.display="none";
}
