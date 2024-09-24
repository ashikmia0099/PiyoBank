
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
   

    const AddMoney = document.getElementById('input-add-money').value;
    const AddPin = document.getElementById('input-add-pin').value;

    console.log(AddMoney, AddPin);


    if (AddPin === '1234'){
        
        const availavleBlance = document.getElementById('available-blance').innerText;
        
        
        

        const AddMoneyNumber = parseFloat(AddMoney);
        const availavleBlanceNumbmer = parseFloat(availavleBlance);
    

        const newBalance =AddMoneyNumber + availavleBlanceNumbmer;
        console.log(newBalance);



        // set new valance

        document.getElementById('available-blance').innerText = newBalance;


    }
    else{
        alert('Pin Number is wrong');
    }


});

