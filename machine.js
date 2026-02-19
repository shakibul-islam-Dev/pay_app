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
