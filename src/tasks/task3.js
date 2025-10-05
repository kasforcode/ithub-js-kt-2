/**
 * @param {string} height - Высота лесенки
 * @returns {string} Строка с отображением лесенки
 * @description Формирование строки с лесенкой заданной длины
 */
const h = Number(height);

if (isNaN(h)) {
  throw new Error("Некорректные входные данные");
}

if (h < 0) {
  throw new Error("Некорректные входные данные");
}

if (!Number.isInteger(h)) {
  throw new Error("Некорректные входные данные");
}

if (h === 0) {
  return "";
}

if (h === 1) {
  return "1";
}

let result = "";

for (let i = 1; i <= h; i++) {
  for (let j = 1; j <= i; j++) {
    result += j;
  }

  if (i < h) {
    result += "\n";
  }
}
return result;
