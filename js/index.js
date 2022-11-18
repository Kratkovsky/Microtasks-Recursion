// Создать рекурсивную функцию вычисления факториала числа. Факториал - произведение всех натуральных чисел от 1 до x.
// 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorial (number) {
  if(number === 0) {
    return 1;
  }
  if(number === 1) {
    return 1;
  }
  return number > 0 ? number * factorial(number -1) : 1;
}
console.log(factorial(6));