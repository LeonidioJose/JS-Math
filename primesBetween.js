/** 
 * @author leo.#7880
 * @param {number} Minimum number to get prime numbers
 * @param {number} Maximum number to get prime numbers
 * @returns {Array<Number>} The prime numbers among the chosen numbers
 */

function primesBetween(low,high) {
  if(!low || !high) return console.error("Missing arguments")
  let t = []
  for(let x = 2; x <= high; x++) {
    t[x] = true
  }
  for(let x = 2; x <= high**.5; x++) {
    if(t[x]) {
      for(let i = x**2; i <= high; i+=x) {
        t[i] = false
      }
    }
  }
  let primes = []
  for(let x = low; x <= high; x++) {
    if(t[x]) primes.push(x)
  }
  return primes
}

// Example Outputs:

primesBetween(1,10)              // [ 2, 3, 5, 7 ] 
primesBetween(1,20)              // [ 2,  3,  5,  7, 11, 13, 17, 19]
primesBetween(6,15)              // [ 7, 11, 13 ]
