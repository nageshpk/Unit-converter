const convertBtn = document.getElementById("num-btn")
let inputNumber = document.getElementById("input-number")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

let values = [3.281, 0.264, 2.204]



convertBtn.addEventListener("click", function() {
    let calcValues = []
    function calculate(num) {
        for (let i=0; i < values.length; i++) {
            num = Number(num)
            let result = num * values[i]
            calcValues.push(result.toFixed(3))
            result = num / values[i]
            calcValues.push(result.toFixed(3))
        }
    }
    calculate(inputNumber.value)
    // console.log(lenNum)
    lengthEl.innerHTML = `<p>${inputNumber.value} meters = ${calcValues[0]} feet | ${inputNumber.value} feet = ${calcValues[1]} meters</p>`
    volumeEl.innerHTML = `<p>${inputNumber.value} liters = ${calcValues[2]} gallons | ${inputNumber.value} gallons = ${calcValues[3]} liters</p>`
    massEl.innerHTML = `<p>${inputNumber.value} kilos = ${calcValues[4]} pounds | ${inputNumber.value} pounds = ${calcValues[5]} kilos</p>`
    // inputNumber.value = 0
})















































// function multiply(num1, num2) {
//     let result =  num1 * num2
//     return result
// }

// function divide(num1, num2) {
//     let result = num1 / num2
//     return result
// }

