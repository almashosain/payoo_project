const validPin = 1234

// Add Money Feature 
document.getElementById('add_money_btn')
.addEventListener('click', function(e){
    e.preventDefault()
    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('account_number')
    .value

    const amount = parseInt(document.getElementById('add_amount').value)
    const pin =parseInt(document.getElementById('add_pin').value)

    const availableBalance = parseInt(document.getElementById('available_balance').innerText )

    if(accountNumber.length <11){
        alert('Please provide valid account number')
        return;
    }

    if(pin !== validPin){
        alert('Please provide valid pin number')
        return;
    }

    const totalNewAvailableBalance = amount + availableBalance
    document.getElementById('available_balance').innerText = totalNewAvailableBalance


})

// CashOut Money Feature 

document.getElementById('withdraw_btn')
.addEventListener('click', function(e){
    e.preventDefault()
   
    const amount = parseInt(document.getElementById('withdraw_amount').value)
    
    const availableBalance =parseInt( document.getElementById('available_balance').innerText)
    
    const totalNewAvailableBalance = availableBalance - amount

    document.getElementById('available_balance').innerText = totalNewAvailableBalance
})










// Toggling Feature

document.getElementById('add_money_button').addEventListener('click',function(){
    document.getElementById('cash_out_parent').style.display = 'none'

    document.getElementById('add_money_parent').style.display = 'block'
})
document.getElementById('cash_out_button').addEventListener('click',function(){
      document.getElementById('add_money_parent').style.display = 'none'

    document.getElementById('cash_out_parent').style.display = 'block'
})


