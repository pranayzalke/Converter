let from = document.getElementById("from")
let to = document.getElementById("to")
let inputNumber = document.getElementById("input-number")
let resultBox = document.getElementById("result-box")

document.getElementById("convert").addEventListener("click",()=>{
    //check from
let fromValue = from.value
    //check to
let toValue = to.value
    //check input no
    let inputValue = inputNumber.value
    //convert input no "from" to "to"
    let result= convertBase(fromValue,toValue,inputValue)
    //show result in result box
    resultBox.innerText = result
})

function convertBase(fromBase,toBase,num){
    let d= parseInt(num,fromBase)//converting no into base10
    let res = d.toString(toBase)//converting base10 to required base
    return res
}

document.getElementById("swap").addEventListener("click",()=>{
    //grab value from "from"
    let temp = from.value
    from.value = to.value
    to.value=temp
})