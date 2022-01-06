/**
 * @author leo.#7880
 * @param {number} number Numbers to get your greatest common factor
 * @returns {number} Greatest common factor of choosed numbers
 */

function gcd(...i) {
  const _i = [...i]
  let divs = {}
  for(let x of _i) {
    divs[String(x)] = []
    for(let y = 0; y < x; ++y) {
      let yy = y +1
      if(x % yy == 0) divs[String(x)].push(yy)
    }
  }
  const entr = Object.values(divs)
  let r = entr.reduce((p,c) => p.filter(e => c.includes(e))).sort((a, b) => a -b)
  return r.pop()
}

// Example Outputs:
gcd(12,24,36,48)                  // 12
gcd(20,15,30)                     // 5
gcd(100,150,300)                  // 50
