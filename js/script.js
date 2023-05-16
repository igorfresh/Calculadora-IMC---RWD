const weigthInput = document.querySelector("#weight")
const heigthInput = document.querySelector("#height")
const calculateButton = document.querySelector("#calculate")
const messageElement = document.querySelector("#message")

let weight
let height

// onchange
weigthInput.addEventListener("change", (event) => {
   weight = event.target.value
})

heigthInput.addEventListener("change", (event) => {
    height = event.target.value
})

calculateButton.addEventListener("click", () => {
    // peso / altura * altura
    const imc = weight / (height * height)


if (imc < 18.5) {
    alert("Abaixo do peso ideal")
}

if (imc >= 18.5 && imc <= 24.9) {
    alert("Peso ideal")
}

if (imc >= 25 && imc <= 29.9) {
    alert("Sobrepeso")
}

if (imc >= 30 && imc <= 34.9) {
    alert("Obesidade I")
}

if (imc >= 35 && imc <= 39.9) {
    alert("Obesidade II")
}

if (imc > 40) {
    alert("Obesidade III")
}

})