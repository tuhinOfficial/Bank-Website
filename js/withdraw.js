//1 Add Click event Listener At Withdraw Button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //2 Get Withdraw input Ammount
    const withdraw=document.getElementById('withdraw-field');
    const withdrawString= withdraw.value;
    const withdrawAmount= parseFloat(withdrawString);

    //3 Get Withdraw Balance
    const withdrawbalanceString= document.getElementById('withdraw-amount');
    const currentWithdrawAmount=withdrawbalanceString.innerText;
    const withdrawbalance=parseFloat(currentWithdrawAmount);
    
    // 4 Set New WithDraw Balance

    const newBalanceWithdraw= withdrawbalance+withdrawAmount;
    withdrawbalanceString.innerText= newBalanceWithdraw;

    // step5

    const totalAmount= document.getElementById('total-amount');
    const totalAmountString= totalAmount.innerText;
    const totalbalance= parseFloat(totalAmountString);

    const currentTotal= totalbalance-withdrawAmount;
    totalAmount.innerText= currentTotal;
    
    withdraw.value ='';
})
