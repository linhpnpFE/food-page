function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        currentNumber++
        callback(currentNumber)
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(4000000, 1, 0, function (number) {
      const formattedNumber = number
      document.getElementById('transaction-count').innerText = formattedNumber
    })
    
    animateNumber(98, 50, 0, function (number) {
      const formattedNumber = number
      document.getElementById('city-count').innerText = formattedNumber
    })
    
    animateNumber(1500, 10, 0, function (number) {
      const formattedNumber = number
      document.getElementById('customer-count').innerText = formattedNumber
    })
  })