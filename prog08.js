function generateSpecialNumbers() {
    let result = [];
  
    // Find first 5 multiples of 2
    let multiplesOf2 = [];
    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0) {
        multiplesOf2.push(i);
        if (multiplesOf2.length === 5) break;
      }
    }
  
    // Find first 5 multiples of 5
    let multiplesOf5 = [];
    for (let i = 1; i <= 100; i++) {
      if (i % 5 === 0) {
        multiplesOf5.push(i);
        if (multiplesOf5.length === 5) break;
      }
    }
  
    // Find first 5 multiples of 7
    let multiplesOf7 = [];
    for (let i = 1; i <= 100; i++) {
      if (i % 7 === 0) {
        multiplesOf7.push(i);
        if (multiplesOf7.length === 5) break;
      }
    }
  
    // Find first 5 multiples of 10
    let multiplesOf10 = [];
    for (let i = 1; i <= 100; i++) {
      if (i % 10 === 0) {
        multiplesOf10.push(i);
        if (multiplesOf10.length === 5) break;
      }
    }
  
    // Combine all multiples
    result = [...multiplesOf2, ...multiplesOf5, ...multiplesOf7, ...multiplesOf10];
  
    return result;
  }
  
  // Generate the numbers and print them
  let specialNumbers = generateSpecialNumbers();
  console.log(specialNumbers);
  