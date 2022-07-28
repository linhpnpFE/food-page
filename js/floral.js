
const click_sidebar = document.querySelector(".js-open-sidebar");
const sidebar_overlay = document.querySelector(".js-sidebar-overlay");
const close_sidebar = document.querySelector(".js-sidebar-close");
function showSidebar() {
  sidebar_overlay.classList.add("open");
}

function hideSidebar() {
  sidebar_overlay.classList.remove("open");
}
click_sidebar.addEventListener("click", showSidebar);
close_sidebar.addEventListener("click", hideSidebar);

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
    
    animateNumber(5000, 5, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('bouquet-sold-number').innerText = formattedNumber
    })
    
    animateNumber(7000, 3, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('happy-clients-number').innerText = formattedNumber
    })

    animateNumber(10, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('year-of-exp-number').innerText = formattedNumber
    })
  })