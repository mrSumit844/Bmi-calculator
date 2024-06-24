console.log("hellow")
const form =document.querySelector('form')

form.addEventListener('submit' , function(e){
    
    e.preventDefault()

    const height = parseInt(document.querySelector('#heights').value)
    const weight = parseInt(document.querySelector('#weights').value)
    const result = document.querySelector('#results')
    // console.log("no")
    if(height <0 || isNaN(height)){
        
        // console.log("not")
        result.innerHTML = `PLEASE GIVE A VALID HEIGHT  ${height}`;
    }
    else if(weight <0 || isNaN(weight)){
        
        // console.log("not")
        result.innerHTML = `PLEASE GIVE A VALID WEIGHT  ${weight}`;
    }else{
       const bmi = (weight / ((height*height)/10000)).toFixed(2)
       result.innerHTML= `<span>${bmi}</span>`
    } 

    
    // result.innerHTML = `${height}`
    
});