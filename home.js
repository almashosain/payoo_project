const validPin = 1234

// Function to get input values 

function getInputValueNumber (id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    
    return inputFieldValueNumber
}

function getInputValue (id) {
      const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}

// Function to get inner text

function getInnerText (id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
return elementValueNumber
}

// Function to set innertext

function setInnerText (value) {
    const availableBalanceElement = document.
    getElementById('available_balance')
    availableBalanceElement.innerText = value
}

// Function to toggle
function handleToggle(id){
    const forms  = document.getElementsByClassName('form')

for(const form of forms){
   form.style.display = 'none'
}
document.getElementById(id).style.display = 'block'
}

// Function To Toggle Buttons

function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName
    ('form_btn')
    
    for(const btn of formBtns){
       btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
       btn.classList.add("border-gray-300")

    }

 document.getElementById(id).classList.remove
        ("border-gray-300")
 document.getElementById(id).classList.add
        ("border-[#0874f2]","bg-[#0874f20d]")
      
}


// Add Money Feature

document.getElementById('add_money_btn')
.addEventListener('click', function(e){
    e.preventDefault()
    const bank = getInputValue('bank')
    const accountNumber = document.getElementById('account_number').value
    
    const amount = getInputValueNumber('add_amount')
    const pinNumber = getInputValueNumber('add_pin')

    const availableBalance = getInnerText ('available_balance')
 
    
if(accountNumber.length < 11){
    alert('Invalid account Number')
    return;
}

if (pinNumber !== validPin){
    alert('Invalid Pin Number')
    return;
}

 const totalNewAvailableBalance = amount + availableBalance

 document.getElementById('available_balance').innerText = totalNewAvailableBalance
})



// CashOut Money Feature 

document.getElementById('withdraw_btn')
.addEventListener('click', function(e){
    e.preventDefault()
   
    const amount = getInputValueNumber('withdraw_amount')
    
    const availableBalance = getInnerText('available_balance')
    
    const totalNewAvailableBalance = availableBalance - amount

    setInnerText(totalNewAvailableBalance)
})



// Toggling Feature

document.getElementById('add_money_button').addEventListener('click',function(e){

handleToggle('add_money_parent')

handleButtonToggle('add_money_button')   
      

})
//  
document.getElementById('cash_out_button').addEventListener('click',function(){
handleToggle('cash_out_parent')
handleButtonToggle('cash_out_button')
})

document.getElementById('transfer_btn')
.addEventListener('click', function(){
handleToggle('transfer_money_parent')

handleButtonToggle('transfer_btn')
})

document.getElementById('bonus_btn')
.addEventListener('click', function(){

  handleToggle('get_bonus_parent')

  handleButtonToggle('bonus_btn')
})





















// document.getElementById('add_money_button').addEventListener('click',function(){
//     document.getElementById('cash_out_parent').style.display = 'none'

//     document.getElementById('add_money_parent').style.display = 'block'
// })
// document.getElementById('cash_out_button').addEventListener('click',function(){
//       document.getElementById('add_money_parent').style.display = 'none'

//     document.getElementById('cash_out_parent').style.display = 'block'
// })


// -------------------------------------


// document.getElementById('add_money_btn')
// .addEventListener('click', function(e){
//     e.preventDefault()
//     const bank = document.getElementById('bank').value
//     const accountNumber = document.getElementById('account_number')
//     .value

//     const amount = parseInt(document.getElementById('add_amount').value)
//     const pin =parseInt(document.getElementById('add_pin').value)

//     const availableBalance = parseInt(document.getElementById('available_balance').innerText )

//     if(accountNumber.length <11){
//         alert('Please provide valid account number')
//         return;
//     }

//     if(pin !== validPin){
//         alert('Please provide valid pin number')
//         return;
//     }

//     const totalNewAvailableBalance = amount + availableBalance
//     document.getElementById('available_balance').innerText = totalNewAvailableBalance


// })