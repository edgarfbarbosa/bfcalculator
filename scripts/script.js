const genderSelect = document.getElementById('gender')
const ageInput = document.getElementById('age')
const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const neckInput = document.getElementById('neck')
const waistInput = document.getElementById('waist')
const hipInput = document.getElementById('hip')
const btnCalculateForm = document.getElementById('btnCalculateForm')

genderSelect.addEventListener('input', () => {
    let node = document.getElementById('node')

    if (genderSelect.value == "male") {
        node.parentNode.removeChild(node)
    }
})

btnCalculateForm.addEventListener('click', event => {
    console.log(event.preventDefault)
    event.preventDefault()
})