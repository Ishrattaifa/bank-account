// step-1: add click event handeler with the submit button 

document.getElementById('btn-submit').addEventListener('click', function(){

    // step-2: get email address inside email input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password inside pasword input field 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // step-4: verify password 
    if(email === 'amarpocket@wallet.com' && password === 'amarpocket'){
        window.location.href = 'bank.html';
        }
        else{
            alert('Afsos, Tumi password tao mone rakhte parlana!!!')
        }

})