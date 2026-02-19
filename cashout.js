const cashoutButton = document.getElementById('cashout-button')

cashoutButton.addEventListener('click', function () {
  const cashoutNumber = getValueFormInput('cashout-number')
  const cashoutAmount = getValueFormInput('amount')
  const cashoutPin = getValueFormInput('cashout-pin')
  const currentBalance = getBalance()

  if (cashoutNumber.length !== 11) {
    alert('Invalid Number')
    return
  }

  //newBlance

  const newBalance = currentBalance - Number(cashoutAmount)
  if (newBalance < 0) {
    alert('Invalid Amout')
    return
  }
  //PinMatching
  if (cashoutPin === '1234') {
    alert('Cashout Sucess')
    console.log('Remaing Blance', newBalance)
    setBalance(newBalance)
  } else {
    alert('Invalid Pin')
    return
  }
})
