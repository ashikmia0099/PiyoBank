

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();



    const AddMoney = document.getElementById('input-add-money').value;
    const PinNumber = document.getElementById('input-add-pin').value;

    console.log('this is all Money', AddMoney, PinNumber);
});
