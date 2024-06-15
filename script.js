const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const description = document.querySelector('#description')

    if(height <0 || height === '' || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }

    else if(weight <0 || weight === '' || isNaN(weight)){
        results.innerHTML = `Please give a valid height ${weight}`
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`

        if(bmi<18.6){
            description.innerHTML= `You are underweight`
        }else if(bmi >18.6 && bmi<24.9){
            description.innerHTML=`Normal`
        }else if(bmi>24.9){
            description.innerHTML=`Overweight`
        }
    }

})