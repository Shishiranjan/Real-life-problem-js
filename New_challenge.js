//Problem:
// We basically work for a company building a smart home thermometer.Our most recent task is this:
//"Given an array of temperatures of one day, we have to calculate the temperature amplitude. 
// Keep in mind that sometimes there might be a sensor error.
//The array of temperature is given below:

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1) Understsnding the problem:
//- What is temperature amplitude: Answer: difference between highest and lowest temperature.
//-How to compute max and min temp.
//-Waht is a sensor error and what to do when it occurs.

// 2) Breaking the single problem into various sub-problems.
// How to ignore the errors.
//How to find the max value in temp array.
//How to find the min value in temp array.
//Subtract min temp from max temp.




//Assume that at first max temp is the first value of the array.



const calcTempAmplitude = function(temps)
{
     let max = temps[0];
     let min = temps[0];

for(let i = 0; i < temps.length; i++)
{
  const curTemp = temps[i];
  if(typeof curTemp !== 'number') continue;

  if(curTemp > max) 
  {
    max = curTemp;
  }
  console.log(max);

  if(curTemp < min)
  {
    min = curTemp;
  }
  console.log(min);
  return max - min;
}
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
    
