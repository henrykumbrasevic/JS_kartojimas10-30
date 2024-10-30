const sezonai = (num) => {
  switch (num) {
    case 12:
    case 1:
    case 2:
      return `žiema`;
    case 3:
    case 4:
    case 5:
      return `pavasaris`;
    case 6:
    case 7:
    case 8:
      return "vasara";
    case 9:
    case 10:
    case 11:
      return `ruduo`;
  }
};
console.log(sezonai(11));
