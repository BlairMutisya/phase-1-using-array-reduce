const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Given batteryBatches array
// Calculate the total sum using reduce
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(totalBatteries); // Output: 14
