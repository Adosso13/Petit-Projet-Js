

const inputdeclaration1 = document.getElementById("input-declaration1")
const inputdeclaration2 = document.getElementById("input-declaration2")

const btn2d = document.querySelectorAll(".bouton2d")
btn2d.forEach(b2=>b2.style.display = "none")

const btn1er = document.querySelectorAll(".bouton1er")


const changementaddition = document.getElementById("changement-de-ligne-addition")
const changementadditionrestart = document.getElementById("changement-de-ligne-addition-restart")
changementadditionrestart.style.display= "none"



changementaddition.addEventListener("click", function () {
    const btn1er = document.querySelectorAll(".bouton1er")
    btn1er.forEach(b=>b.style.display = "none")
    btn2d.forEach(b2=>b2.style.display = "block")
    changementaddition.style.display="none"
    changementadditionrestart.style.display= "block"
})

changementadditionrestart.addEventListener("click", function () {
    const btn2d = document.querySelectorAll(".bouton2d")
    btn1er.forEach(b=>b.style.display = "block")
    btn2d.forEach(b2=>b2.style.display = "none")
    changementaddition.style.display="block"
    changementadditionrestart.style.display= "none"
})



const num1 = document.getElementById("num1")
num1.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration1.value += 1 
}) 
const number1 = document.getElementById("number1")
number1.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration2.value += 1 
})
 
const num2 = document.getElementById("num2")
num2.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration1.value += 2 
})
const number2 = document.getElementById("number2")
number2.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration2.value += 2 
})

const num3 = document.getElementById("num3")
num3.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration1.value += 3 
})  
const number3 = document.getElementById("number3")
number3.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration2.value += 3 
})

const num4 = document.getElementById("num4")
num4.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration1.value += 4 
}) 
const number4 = document.getElementById("number4")
number4.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration2.value += 4 
})

const num5 = document.getElementById("num5")
num5.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration1.value += 5 
}) 
const number5 = document.getElementById("number5")
number5.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration2.value += 5 
})

const num6 = document.getElementById("num6")
num6.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration1.value += 6 
}) 
const number6 = document.getElementById("number6")
number6.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration2.value += 6 
})

const num7 = document.getElementById("num7")
num7.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration1.value += 7 
}) 
const number7 = document.getElementById("number7")
number7.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration2.value += 7 
})

const num8 = document.getElementById("num8")
num8.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration1.value += 8 
}) 
const number8 = document.getElementById("number8")
number8.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration2.value += 8 
})

const num9 = document.getElementById("num9")
num9.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration1.value += 9 
}) 
const number9 = document.getElementById("number9")
number9.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration2.value += 9 
})

const num0 = document.getElementById("num0")
num0.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration1.value += 0 
})
const number0 = document.getElementById("number0")
number0.addEventListener("click", function (event) {
    event.preventDefault()
    inputdeclaration2.value += 0 
})


const form = document.getElementById("formulaire")

form.addEventListener("submit", function(event) {
    event.preventDefault()
    const inputdeclaration1 = Number(document.getElementById("input-declaration1").value)
    const inputdeclaration2 = Number(document.getElementById("input-declaration2").value)
    resultat.innerText = inputdeclaration1 + inputdeclaration2  
})

form.addEventListener("reset", function(event) {
    event.preventDefault()
    resultat.innerText = ""
    inputdeclaration1.value = ""
    inputdeclaration2.value = ""
    changementaddition.style.display="block"
    changementadditionrestart.style.display= "none"
})


const resultat = document.getElementById("resultat")