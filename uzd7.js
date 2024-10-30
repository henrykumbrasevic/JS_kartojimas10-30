const pasakykOra = (num) => {
  switch (num) {
    case 1:
      return `Saulėta`;
      break;
    case 2:
      return `lietinga`;
      break;
    case 3:
      return `vėjuota`;
      break;
    case 4:
      return `sniegas`;
      break;
  }
};
console.log(pasakykOra(4));
