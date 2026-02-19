//common id grabbing

function getValueFormInput(id) {
  const input = document.getElementById(id)
  const value = input.value
  return value
}
//common balacne
function getBalance() {
  const balanceElement = document.getElementById('balance')
  const balance = balanceElement.innerText
  return Number(balance)
}
//BalanceMaker
function setBalance(value) {
  const balanceElement = document.getElementById('balance')
  balanceElement.innerText = value
  return Number(value)
}

//machin id hide all>show only

function showOnly(id) {
  const addMoney = document.getElementById('addmoneybody')
  const cashout = document.getElementById('cashoutbody')
  addMoney.classList.add('hidden')
  cashout.classList.add('hidden')
  const selected = document.getElementById(id)
  selected.classList.remove('hidden')
}
