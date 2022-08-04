function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
  const startTime = performance.now()
  function updateNumber(currentTime) {
    const elapsedTime = currentTime - startTime
    if (elapsedTime > duration) {
      callback(finalNumber)
    } else {
      const rate = elapsedTime / duration
      const currentNumber = Math.round(rate * finalNumber)
      callback(currentNumber)
      requestAnimationFrame(updateNumber)
    }
  }
  requestAnimationFrame(updateNumber)
}

document.addEventListener('DOMContentLoaded', function () {
  animateNumber(3000, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('packages').innerText = formattedNumber
  })
  
  animateNumber(5000, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('bouquet').innerText = formattedNumber
  })
  
  animateNumber(7000, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('happy-clien').innerText = formattedNumber
  })
  animateNumber(10, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('years').innerText = formattedNumber
  })
});
const showvideo = document.querySelector('.ctnvideo')
const hidevideo2 = document.querySelector('.ctnvideo2')
const hideclick = document.querySelector('.click-hd')
const showclick = document.querySelector('.click-hd2')
  showvideo.addEventListener('click', () => {
  showvideo.style.display = 'none'
  hidevideo2.style.display = 'block'
})
  showclick.addEventListener('click', () => {
  showclick.classList.add('active')
  hideclick.classList.remove('active')
})
  hideclick.addEventListener('click', () => {
  hideclick.classList.add('active')
  showclick.classList.remove('active')
})
const heartclick = document.querySelectorAll('.item-heart')
  for (let i = 0; i < heartclick.length; ++i) {
    heartclick[i].addEventListener('click', () => {
      if (true) {
        heartclick[i].classList.add('active2')
      }
    })
  }






