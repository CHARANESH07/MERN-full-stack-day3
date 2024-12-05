function findStringLength(str) {
    let count = 0;
  

    for (let i = 0; str[i] !== undefined; i++) {
      count++;
    }
  
    return count;
  }

  let inputString = "Hello, World!";
  let length = findStringLength(inputString);
  console.log("The length of the string is: " + length);
  