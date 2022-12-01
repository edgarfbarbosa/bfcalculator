const genderSelect = document.getElementById('gender')
const ageInput = document.getElementById('age')
const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const neckInput = document.getElementById('neck')
const waistInput = document.getElementById('waist')
const hipInput = document.getElementById('hip')
const btnCalculate = document.getElementById('btnCalculate')

genderSelect.addEventListener('input', () => {
    let node = document.getElementById('node')

    if (genderSelect.value == 'male') {
        node.style.visibility = 'hidden'
    } else {
        node.style.visibility = 'visible'
    }
})

btnCalculate.addEventListener('click', event => {
    event.preventDefault()

    if (genderSelect.value == 'male') {
        console.log(((495 / ((1.0324 - 0.19077 * Math.log10(waistInput.value - neckInput.value)) + (0.15456 * Math.log10(heightInput.value)))) - 450).toFixed(1))
    } else {
        console.log(((495 / ((1.29579 - 0.35004 * Math.log10(parseInt(waistInput.value) + parseInt(hipInput.value) - parseInt(neckInput.value))) + (0.22100 * Math.log10(heightInput.value)))) - 450).toFixed(1))
    }
})