

const ul = document.getElementById('link')
let text 
for(let number = 1 ; number <= 100; number++) {

   
    if (number % 3 == 0 && number % 5 == 0  ) {
        text = 'fizzbuzz'
    }
    else if(number % 3 == 0 ) {
       text = 'fizz'

    }
    else if(number % 5 == 0 ) {
        text = 'buzz'
        
    }
    
    else {
    text = number
    }
     ul.innerHTML += ` <li>${text} </li>`

}