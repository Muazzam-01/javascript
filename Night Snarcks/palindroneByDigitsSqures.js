//three digits numbers wherre the sum of the squres of the digits equals the number itself
let sum = 0;
for(let number= 1; number <= 999; number++){
  let number1 = math.floar(number / 100);        // 153 / 100 = 1.53
  let number2 = math.floar(number / 10) % 10;     // 153 / 10 = 15.3 after 15.3 % 10 = 5.3
  let number3 = math.floar(number / 10);         // 153 % 10 = 3.
    sum = number1 ** 2 + number2 ** 2 + number3 ** 2;
     if (sum == number){ 
  console.log(number);  
  }
}
