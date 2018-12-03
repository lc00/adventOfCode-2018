const fs = require('fs')

let input = fs.readFileSync('dayOneInput-partOne.txt', 'utf8') 

let inputArr = input.split('\n')

function reducer (accumulator, currentVal) {	
	console.log('starting number', currentVal)
	let currentValArr = currentVal.split('')

	let direction = currentValArr.splice(0, 1).join('')

	currentVal = currentValArr.join('')

	console.log('direction', direction)

	console.log('currentVal', currentVal)

	
	if(direction === '-')	{
		let result = Number(accumulator) - Number(currentVal)
		console.log('blah -', result)
		return result

	} else	{
		let result = Number(accumulator) + Number(currentVal)
		console.log('blah + ', result)
		return result
	}
	
}

// console.log('inputArr', inputArr)

function getFrequency (inputArr) {
	let result = inputArr.reduce(reducer, 0)

	console.log('result', result)
}

// function forLoop (inputArr) {
// 	for (var i = 0; i < inputArr.length; i++) {
// 		inputArr[i]
// 	};
// }

getFrequency(inputArr)

// while true, 
// 
// get result frequency, check if it's in the array
// if yes, break out of while-loop return frequency
// else 	push into the array










