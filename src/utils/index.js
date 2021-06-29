export const capitalize = (word) => {
  // Utilizando expresiones regulares (regex)
  return word
    .toLowerCase()
    .replace(/\w/, (firstLetter) => firstLetter.toUpperCase());
};

export const leftZeroPad = (number) => {
  return number.toString().padStart(3, "0");
};

export const decimiterToMeter = (height) => {
  return `${(height / 0.1).toFixed(2)} M`;
};

export const hectogramToPound = (weight) => {
  return `${(weight / 0.220462).toFixed(2)} P`;
};
