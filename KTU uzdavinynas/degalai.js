const calcDays = (kuras, sanaudos) => {
  let days = 0
  while (kuras>0){
    days+=1
    if (days%2!==0){
      kuras -= sanaudos*2
    } else {
      kuras -= sanaudos
    }
  }
  console.log(`Keliauti bus galima ${days} dienų/(as)/(ą)`);
}
calcDays (20, 5)
