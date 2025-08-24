const validPin = 1234

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



