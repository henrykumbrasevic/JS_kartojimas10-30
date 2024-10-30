let result = 0

const countInterval = (x, y) => {
    for (let i = x; i <= y; i++)
        result += i
    console.log(result);
    
}
countInterval(1, 5);
