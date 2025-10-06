/**
 * @param {string} word - Слово для проверки
 * @returns {boolean} - Итог проверки
 * @description Проверка слова на палиндром
 */
export function isPalindrome(word) {
  if (word === null) {
    throw new Error("Пользователь отменил ввод");
  }
  if (Number.isInteger(word)) {
    throw new Error("Некорректные входные данные");
  }
  if (word.includes(" ")) {
    throw new Error("Введено несколько слов");
  }

  if (!/^[a-zA-Zа-яА-ЯёЁ]+$/.test(word)) {
    throw new Error("Некорректные входные данные");
  }

  let result = "";
  if (word.length === 1) {
    return word + " - не палиндром";
  }

  const str = word.toLowerCase();

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return `${word} - не палиндром`;
    }
  }
  return `${word} - палиндром`;
}
