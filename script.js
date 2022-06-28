let number = 0
let currentNumber = document.getElementById('currentNumber')
let subtrair = document.getElementById('subtrair')
let adicionar = document.getElementById('adicionar')

subtrair.addEventListener('click', () => {
    number--
    currentNumber.innerHTML = number
    if (number < 0) {
        currentNumber.style.color = 'red'
    } else {
        currentNumber.style.color = 'black'
    }

    if(number < -4) {
        document.getElementById('subtrair').disabled = true      
    }
})

adicionar.addEventListener('click', () => {
    number++
    currentNumber.innerHTML = number
    if (number < 0) {
        currentNumber.style.color = 'red'
    } else {
        currentNumber.style.color = 'black'
    }

    if(number > 9) {
        document.getElementById('adicionar').disabled = true
    } else if(number < 9) {
        document.getElementById('adicionar').disabled = false
    }
})
