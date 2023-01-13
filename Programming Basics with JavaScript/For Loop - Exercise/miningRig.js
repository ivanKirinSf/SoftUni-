function miningRig(input){
  let gpuSinglePrice = Number(input[0]);
  let cable = Number(input[1]);
  let priceElectricityDailyGpu =  Number(input[2]);
  let profitGpuDay = Number(input[3]);

  let spendedMoney = 0;
  let roi = 0;
  let totalGpuPrice = gpuSinglePrice*13;
  let totalCablePrice = cable*13;
  spendedMoney = 1000 + totalCablePrice + totalGpuPrice;
  let totalProfitDayGpu = profitGpuDay - priceElectricityDailyGpu; 
  let totalProfitDay = 13*totalProfitDayGpu;
  roi = Math.round(spendedMoney/totalProfitDay)


  console.log(spendedMoney);
  console.log(roi)


  
}
