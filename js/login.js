// add Event Listener

document.getElementById('btn-login').addEventListener('click' ,function(){
    // Get email Input value
    const emailfield= document.getElementById('mail');
    const email=emailfield.value;
    
    // get Password From password Input Field
    const passwordfield=document.getElementById('pass');
    const password=passwordfield.value;
    
    // Check Email And Password valid or Invalid

    if(email=='tuhin@gmail.com' && password==1234){
        window.location.href='bank.html'
    }
    else{
        alert('Please Use Valid email and Password')
    }
});