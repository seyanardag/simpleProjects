let decrease = document.querySelector(".decreaseCls")
let reset = document.querySelector(".resetCls")
let increase = document.querySelector(".increaseCls")
let counterResult = document.querySelector(".counterResult")
let counter = 0;

decrease.addEventListener("click", function () {
    counter--
    counterResult.textContent=counter
    counterResult.style.color="red"
})
reset.addEventListener("click", function () {
    counter = 0
    counterResult.textContent=counter
    counterResult.style.color="gray"
})
increase.addEventListener("click", function () {
    counter++
    counterResult.textContent=counter
    counterResult.style.color="green"
})