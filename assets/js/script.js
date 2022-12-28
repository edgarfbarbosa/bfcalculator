const genderSelect = document.getElementById('gender')
const ageInput = document.getElementById('age')
const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const neckInput = document.getElementById('neck')
const waistInput = document.getElementById('waist')
const hipInput = document.getElementById('hip')

const btnCalculate = document.getElementById('btnCalculate')
const btnClear = document.getElementById('btnClear')

const hipNode = document.getElementById('hipNode')
hipNode.style.visibility = 'hidden'

genderSelect.addEventListener('input', () => {
    if (genderSelect.value == 'male') {
        hipNode.style.visibility = 'hidden'
    } else {
        hipNode.style.visibility = 'visible'
    }
})

btnCalculate.addEventListener('click', event => {
    event.preventDefault()

    const resultCalcTitle = document.getElementById('resultCalcTitle')
    const resultCalcBfp = document.getElementById('resultCalcBfp')

    const calcBfpMasc = ((495 / ((1.0324 - 0.19077 * Math.log10(waistInput.value - neckInput.value)) +
        (0.15456 * Math.log10(heightInput.value)))) - 450).toFixed(1)

    const calcBfpFem = ((495 / ((1.29579 - 0.35004 * Math.log10(parseInt(waistInput.value) + parseInt(hipInput.value) - parseInt(neckInput.value))) +
        (0.22100 * Math.log10(heightInput.value)))) - 450).toFixed(1)

    resultCalcTitle.innerText = 'Resultado:'

    if (genderSelect.value == 'male') {
        resultCalcBfp.innerText = `Seu percentual de gordura corporal é de: ${calcBfpMasc}%`
    } else {
        resultCalcBfp.innerText = `Seu percentual de gordura corporal é de: ${calcBfpFem}%`
    }
})

btnClear.addEventListener('click', () => {
    ageInput.value = ''
    weightInput.value = ''
    heightInput.value = ''
    neckInput.value = ''
    waistInput.value = ''
    hipInput.value = ''
})