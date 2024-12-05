
function categorizeStudent(percentage) {
  if (percentage >= 90) {
      console.log("Grade: A+ (Excellent - Highest Priority)");
  } else if (percentage >= 80) {
      console.log("Grade: A (Very Good)");
  } else if (percentage >= 70) {
      console.log("Grade: B+ (Good)");
  } else if (percentage >= 60) {
      console.log("Grade: B (Average - Better)");
  } else if (percentage >= 50) {
      console.log("Grade: C+ (Below Average)");
  } else {
      console.log("Grade: C (Poor - Lowest Priority)");
  }
}

let percentage = 90;

categorizeStudent(percentage);