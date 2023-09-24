const getColor =()=>{
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode ="#" +randomNumber.toString(16);
    
    document.getElementById('color-code').innerHTML = randomCode;
    document.body.style.backgroundColor=randomCode;
}
getColor();
document.getElementById('btn').addEventListener("click",getColor);