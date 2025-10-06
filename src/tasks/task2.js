/**
 * @param {string} userInput - Число
 * @returns {string} Строка с перечислением кратных трём
 * @description Формирование строки с перечислением чисел
 * от 1 до userInput, кратных трём, через запятую с пробелом
 */
export function getMultiplesOfThree(userInput) {
  if (userInput === null) {
    throw new Error("Пользователь отменил ввод");
  }

  if (isNaN(userInput)) {
    throw new Error("Некорректные входные данные");
  }

  let result = "";
  for (let i = 1; i <= userInput; i++) {
    if (i % 3 === 0) {
      result += i + ", ";
    }
  }
  return result ? result.slice(0, -2) : result;
}
