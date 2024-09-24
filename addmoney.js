

// document.getElementById('btn-add-money').addEventListener('click', function(event){
//     event.preventDefault();



//     const AddMoney = getInputFieldValueById('input-add-money');
//     const PinNumber = getInputFieldValueById('input-add-pin');

//     console.log('this is all Money', AddMoney, PinNumber);


//     if(PinNumber === 123){
        
//         const AvailableBlance = getTextElement('available-blance')
//         console.log('this is available Blance', AvailableBlance)
//     }
//     else{
//         alert('wrong pin number');
//     }



// });



// add money js


document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();



    const AddMoney = getInputFieldValueById('input-add-money');
    const PinNumber = getInputFieldValueById('input-add-pin');


    if(PinNumber === 123){
        
        const AvailableBlance = getTextElement('available-blance')
        
        const totalBalance = AvailableBlance + AddMoney;
        document.getElementById('available-blance').innerText = totalBalance;
        console.log('Available Balance', totalBalance);

    }
    else{
        alert('wrong pin number');
    }



});


