let inputUsdSum = document.convertor.input__usdSum
let btnUsdSum = document.querySelector('.btn__usdSum')
let inputUsdSumResult = document.convertor.input__usdSumResult

btnUsdSum.addEventListener("click", e => {
  e.preventDefault()

  inputUsdSumResult.value = (inputUsdSum.value * 12.174).toFixed(2)
  inputUsdSum.value = ""
})


let inputSumUsd = document.convertor.input__sumUsd
let btnSumUsd = document.querySelector('.btn__sumUsd')
let inputSumUsdResult = document.convertor.input__sumUsdResult

btnSumUsd.addEventListener("click", e => {
  e.preventDefault()

  inputSumUsdResult.value = (inputSumUsd.value / (12.174 * 1000)).toFixed(2)
  inputSumUsd.value = ""
})