/**
 * @author leo.#7880
 * @param {number} 
 * @returns {Array < Array<number> >} The number factored into prime factors
 */

function sums(num) {
  if(num < 0) return;
  let arr = []
  for(let x = 1; x <= num; ++x) {
    for(let y = 1; y <= num; ++y) {
      if(x+y == num) arr.push([x,y])
    }
  }

  return arr.length, arr
}

// Example Outputs:

sums(10)                  // [ [ 1, 9 ], [ 2, 8 ], [ 3, 7 ], [ 4, 6 ], [ 5, 5 ], [ 6, 4 ], [ 7, 3 ], [ 8, 2 ], [ 9, 1 ] ]
sums(5)                   // [ [ 1, 4 ], [ 2, 3 ], [ 3, 2 ], [ 4, 1 ] ]
sums(6)                   // [ [ 1, 5 ], [ 2, 4 ], [ 3, 3 ], [ 4, 2 ], [ 5, 1 ] ]             
