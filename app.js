console.log('Apps Are working')

const logButton = document.getElementById('login-button')
//addEventListener for Loging
logButton.addEventListener('click', function () {
  //User Id Grabbing
  const userNumber = document.getElementById('user-number')
  const userPin = document.getElementById('user-pin')
  //userNumber
  const contactNumber = userNumber.value
  const pin = userPin.value

  //userPin
  if (contactNumber === '01617897307' && pin === '1234567') {
    //Home page Linking
    window.location.assign('/home.html')
  } else {
    alert('Loging Failed')
    return
  }
  //true of false
  console.log(contactNumber)
  console.log(pin)
})
