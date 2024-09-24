

document.getElementById('login-button').addEventListener('click', function(event){
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber === '5' && pinNumber === '123'){
        console.log('You are successfully logged in');

        window.location.href = '/home.html'
    }
    else{
        alert('Your phone and pin numbers do not match.');
    }




});






