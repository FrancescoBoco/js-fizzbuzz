

const ul = document.querySelector('.ul')

for(let number = 1 ; number <= 100; number++) {
    console.log ('number', number, typeof number)

   
    
    if (number % 3 == 0 ) {
        console.log (number, 'fizz')

    }

     if(number % 5 == 0 ) {
        console.log (number,'buzz')

    }

     if (number % 3 == 0 && number % 5 == 0  ) {
        console.log (number,'fizzbuzz')

    }
   
    //  ul.innerHTML += ` <li>${number}</li>`

}