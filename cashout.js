

document.getElementById('btn-cash-money').addEventListener('click', function(event){
    event.preventDefault();



    const Cashout = getInputFieldValueById('input-cash-out');
    const PinNumber = getInputFieldValueById('input-cash-out-pin');


    if(PinNumber === 123){
        
        const AvailableBlance = getTextElement('available-blance')
        
        const totalBalance = AvailableBlance - Cashout;
        document.getElementById('available-blance').innerText = totalBalance;
        console.log('Current Available Balance', totalBalance);

    }
    else{
        alert('wrong pin number');
    }



});



