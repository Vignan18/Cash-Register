const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check");
const noofNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000,500,100,20,10,5,1];
console.log("something");
checkButton.addEventListener("click",function validateBillAndCashAmount(){
    if(cashGiven.value<=0){
        console.log("Enter valid amount i.e greater than or equal to bill amount");
    }
    else if(cashGiven.value<billAmount.value){
        console.log("Enter amount greater than or equal to bill amount");
    }
    else{
        const amountToBeReturned = cashGiven.value-billAmount.value;
        calculateChange(amountToBeReturned);
    }
});

function calculateChange(amountToBeReturned){
    for(let i=0;i<availableNotes.length;i++){
        const numberofNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned = amountToBeReturned%availableNotes[i];
        noofNotes[i].innerText = numberofNotes;
    }
}