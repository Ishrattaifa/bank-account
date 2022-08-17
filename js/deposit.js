
// step-1: add event handler to the deposit button 
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2: get the amount from deposit input Field 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';

    if(isNaN(newDepositAmount)){
        alert('Takar amount ulta palta likhcho keno??? Thik kore likho!')
        return;
    }

    // step-3: get the deposit total 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step-4: add numbers to get the total deposit amount 
    const currentDepositAmount = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositAmount;
    // step-5: get current balance total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step-6:calculate total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

   

   
})