const countKMI = (ugis, svoris) => {
return svoris / Math.pow(ugis, 2);
}
console.log(`Jūsų KMI yra:` + " " + countKMI(1.8, 78));
