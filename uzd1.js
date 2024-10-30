const countDays = (days) => {
    const hours = days * 24;
    const minutes = hours * 60;

return `${days} dienos yra ${hours} valandos, arba ${minutes} minučių`
}
console.log(countDays(10));
