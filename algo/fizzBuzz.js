const fizzBuzz = (input) => {
	for (i = 0 ; i <= input; i++){
  	if(i % 15 === 0) console.log("FizzBuzz")
    else if(i % 3 === 0) console.log("Fizz")
    else if(i % 5 === 0) console.log("Buzz")
    else console.log(i)
  }
}
