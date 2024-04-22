const celsiusField =document.querySelector("#celsius");
const degree =document.querySelector("#degree");
const convertBtn =document.querySelector("#converter-btn");
const temptype =document.querySelector("#temp-type");

window.addEventListener("load",()=>{
  degree.value=""
  celsiusField.innerHTML=""

})
convertBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    convertTocelsius();

   
})

function convertTocelsius(){
    let inputvalue=degree.value;

    if(temptype.value==="fahrenheit"){
         const fahrenheitTocelsius=(inputvalue -32) * (5/9);
         celsiusField.innerHTML=`${ fahrenheitTocelsius.toFixed(3)} &deg;
         c`
    }
    else if(temptype.value==="kelvin"){
        const kelvinTocelsius=(inputvalue -273.15);
        celsiusField.innerHTML=`${kelvinTocelsius. toFixed(3)} &deg;
        c`
    }
}