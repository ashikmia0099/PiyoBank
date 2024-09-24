

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();


    
    const AddMoney  = document.getElementById('input-add-money').value;
    const AccountPin  = document.getElementById('input-add-pin').value;


    if(AccountPin == '1234'){

            
        const AvailableBlance = document.getElementById('available-blance').innerText;

        


        const AddMoneyNumber = parseFloat(AddMoney)
        const AvailableBlanceNumber = parseFloat(AvailableBlance)


        const NewBalance = AddMoneyNumber + AvailableBlanceNumber

        console.log(NewBalance)


        // set new balacne 

        document.getElementById('available-blance').innerText = NewBalance



    }

    else{
        console.log('Account Pin is not vaild');
    }

    



})


