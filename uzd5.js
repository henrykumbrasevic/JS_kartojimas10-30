const findGrade = (num) => {
  if (num > 0 && num < 30) {
    return `failed`;
  } else if (num >= 30 && num < 35) {
    return `pažymys 1`;
  } else if  (num >=35 && num < 39) {
    return `pažymys 2`;
  } else if  (num >= 39 && num < 44) {
    return `pažymys 3`
  } else if (num >= 44 && num < 49) {
    return `pažymys 4`
  } else (num >= 49 && num <= 60); {
    return `pažymys 5`
  }
}
console.log(findGrade(44));
