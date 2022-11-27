const genderSelect = document.getElementById('gender')
const ageInput = document.getElementById('age')
const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const neckInput = document.getElementById('neck')
const waistInput = document.getElementById('waist')
const hipInput = document.getElementById('hip')
const btnCalculateForm = document.getElementById('btnCalculateForm')

genderSelect.addEventListener('input', event => {
    console.log(event.target.value)
    event.target.value
})

btnCalculateForm.addEventListener('click', event => {
    console.log(event.preventDefault)
    event.preventDefault()
})