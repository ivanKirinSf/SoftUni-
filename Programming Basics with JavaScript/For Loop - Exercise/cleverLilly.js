function cleverLilly(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);
  
    let secondBirthdayMoney = 10;
    let birthdayMoney = 0;
    let stolenMoney = 0;
    let totalBirthdayMoney = 0;
    let toyAmount = 0;
    let toyMoney = 0;
    let savedMoney = 0;
  
  
  
    for(let i = 1; i<=age; i++){
      if(i%2===0){
          birthdayMoney += secondBirthdayMoney;
          secondBirthdayMoney += 10;
          stolenMoney ++ 
      } else {
          toyAmount++;
      }
    }
  
    totalBirthdayMoney = birthdayMoney - stolenMoney;
    toyMoney = toyAmount * singleToyPrice;
    savedMoney = totalBirthdayMoney + toyMoney;
  
    let diffrence = Math.abs(savedMoney - washingMachinePrice)
  
    if(savedMoney >= washingMachinePrice){
      console.log(`Yes!${diffrence.toFixed(2)}`)
    } else {
      console.log(`No!${diffrence.toFixed(2)}`)
    }
   }
