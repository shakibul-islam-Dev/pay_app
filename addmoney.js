document
  .getElementById('addmoney-button')
  .addEventListener('click', function () {
    // banck account Nite hbe
    const bankAccount = getValueFormInput('add-money-bank')
    if (bankAccount == 'Select A Bank') {
      alert('Please Select a bank')
      return
    }
    const bankAccountNumber = getValueFormInput('bank-acc-number')
    if (bankAccountNumber.length !== 11) {
      alert('Invalid Accout')
      return
    }
    const addAmount = getValueFormInput('addAmount')

    //amount add krte hbe
    const newBalance = getBalance() + Number(addAmount)
    console.log(newBalance)

    const addPin = getValueFormInput('addMoney-pin')
    if (addPin === '1234') {
      alert('AddMoney Sucess')
      console.log('New Blance', newBalance)
      setBalance(newBalance)
    }
    //pin dite hbe
    //bank select krete hbe

    // console.log(bankAccount, addAmount, addPin)
  })
