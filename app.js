const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById('btn')
const span = document.querySelector('.color')
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}

button.addEventListener('click', function(){
  const randomNumber = getRandomNumber()
  document.body.style.backgroundColor = colors[randomNumber]
  span.textContent = colors[randomNumber]
})

export { span, getRandomNumber}

