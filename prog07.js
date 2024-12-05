function processNumbers() {
    let results = []; 
  
    for (let i = 1; i <= 100; i++) {
      let num = i; 
  
      
      if (num % 2 === 0) {
        num = (num / 2) * 5;
      }
  
      
      if (num % 3 === 0) {
        num = num / 3;
      }
  
      // Store the final result for the current number
      results.push(num);
    }
  
    return results;
  }
  
  // Get the final results for the first 100 natural numbers
  let finalResults = processNumbers();
  
  // Output the results
  console.log(finalResults);
  