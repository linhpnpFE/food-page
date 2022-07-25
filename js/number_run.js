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
    animateNumber(3000, 10, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('package-sold-number').innerText = formattedNumber
    })
    
    animateNumber(5000, 10, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('bouquet-sold-number').innerText = formattedNumber
    })
    
    animateNumber(7000, 10, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('happy-clients-number').innerText = formattedNumber
    })

    animateNumber(10, 500, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('year-of-exp-number').innerText = formattedNumber
    })
  })