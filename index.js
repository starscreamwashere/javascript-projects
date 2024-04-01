const input=document.getElementById("input_value")
const fht=document.getElementById("toFahrenheit")
const celsius=document.getElementById("toCelsius")
const result=document.getElementById("result")
let temp;
function convert(){
    if(fht.checked){
        temp=Number(input.value)
        result.textContent=(temp*(9/5))+32
    }
    else if(celsius.checked){
        temp=Number(input.value)
        result.textContent=(temp-32)*(5/9)
    }
    else{
        result.textContent=`Select a unit`
    }
}