// Login Button Functionality 

document.getElementById('loginButton')
.addEventListener('click',function(e){
    e.preventDefault()
    const mobileNumber = 12345678910
    const pin = 1234

    const mobileNumberValue = document.
    getElementById('mobile_number').value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumber = document.getElementById('pin_number').value
    const pinNumberValueConverted = parseInt(pinNumber)

    if(mobileNumberValueConverted === mobileNumber &&
        pinNumberValueConverted === pin ){
            window.location.href="./home.html"
        }
        else{
            alert('Invalid Credentials')
        }
})



// .addEventListener('click' , function(e){
//     e.preventDefault()
//     const mobileNumber = 12345678910
//     const pinNumber = 1234
//     const mobileNumberValue = document.getElementById('mobile_number').value
//     const mobileNumberValueConverted = parseInt(mobileNumberValue)
//     const pinNumberValue = document.getElementById('pin_number').value
//     const pinNumberValueConverted = parseInt(pinNumberValue)


//     if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
//         window.location.href="./home.html"
//     }
//     else{
//         alert("Invalid Credentials")
//     }
// } )