const prodArray = (n) => {
  if (n.length === 0) return 1;   
  return n.reduce((a,b) => a + b, 0) * prodArray(n.length - 1)
}

// Answer:
// const prodArray = (nums) => {
//   let sum = nums.reduce((a, b) => a + b, 0)
//   console.log(sum); 
//   let newArray = [];

//   nums.forEach((n) => {
//    let number = n / sum 
//    newArray.push(number);
//   })

//   return newArray;
// }


console.log(prodArray([1,2,3]));

