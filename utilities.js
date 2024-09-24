


function getInputFieldValueById(Id){

    const inputValue = document.getElementById(Id).value;
    const inputNumber = parseFloat(inputValue)

    console.log(Id, inputValue, inputNumber);
   
    return inputNumber;

}


function getTextElement(Id){

    const textvalue = document.getElementById(Id).innerText;
    const textNumber = parseFloat(textvalue);
    
    return textNumber;

}



function ShowSectionbyId(id){
    document.getElementById('add-money-forms').classList.add('hidden');
    document.getElementById('cash-out-forms').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
