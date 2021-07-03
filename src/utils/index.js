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
  return `${(height / 10).toFixed(2)} m`;
};

export const hectogramToPound = (weight) => {
  return `${(weight / 4.536).toFixed(2)} lb`;
};
