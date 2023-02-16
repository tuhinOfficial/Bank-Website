// Step 1
document.getElementById('btn-diposite').addEventListener('click' ,function(){
    //2 get value from Diposite Input Field
    const dipositeField= document.getElementById('diposite-field');
    const dipositeAmountString=dipositeField.value;
    const dipositeAmount=parseFloat(dipositeAmountString);

    //  Clear The Diposite Field
    dipositeField.value='';
    // check NAN
    if(isNaN(dipositeAmount)){
        alert('Please input Number');
        return
    }
    
    //3 get Diposite Total Amount
     const dipositeElement=document.getElementById('disposite-amount');
     const totalDipositeString=dipositeElement.innerText;
     const totalDiposite=parseFloat(totalDipositeString);
     
    // 4 Set Total Diposite 
     const currentDiposite=totalDiposite+dipositeAmount;
     dipositeElement.innerText =currentDiposite;

    //5  Get Total Amount
    const totalAmount= document.getElementById('total-amount');
    const totalAmountString= totalAmount.innerText;
    const totalbalance= parseFloat(totalAmountString);
    
    const currenttotalBalance= totalbalance+dipositeAmount;
    totalAmount.innerText=currenttotalBalance;
    // 6 Calculate Total Balance

    

});