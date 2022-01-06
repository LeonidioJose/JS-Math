/**
 * @author leo.#7880
 * @param {number} Number that will be factored
 * @returns {string} The number factored into prime factors
 */

function isPrime(num) {
  let tbl = []
  for(let x = 1; x<num+1; ++x) {
    if(num % x == 0) {
      tbl.push(x)
    }
  }

  return tbl.length == 2
}

function primeFactors(n) {
  let factors = []
  var _n = n
  let i = 1
  while(_n > 1) {
    if(_n % i == 0 && isPrime(i)) {
      _n/=i
      factors.push(i)
      i = 1
    }
    ++i
  }
  let uR = new Set(factors)
  let st = []
  for(let x of uR) {
    let qnt = factors.filter(b => b == x).length
    if(qnt > 1) {
      st.push(`${x}^${qnt}`)
    } else st.push(x)
  }
  return st.join(" * ")
}
// Example Outputs:

primeFactors(50)                  // 2 * 5^2
primeFactors(100)                 // 2^2 * 5^2
primeFactors(132)                 // 2^2 * 3 * 11
