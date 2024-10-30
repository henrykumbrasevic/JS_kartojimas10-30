let sum = 0

const countInterval = (x, y) => {
    for (let i = x; i <= y; i++)
        sum += i
    console.log(sum);
    
}
countInterval(1, 5);
