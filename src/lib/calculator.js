// src/lib/calculator.js (unchanged – already correct)
export function calculateProfitability(inputs) {
  const {
    asicCost = 0,
    hashRate = 0,
    power = 0,
    electricityCost = 0,
    coinPrice = 0,
    blockReward = 0,
    networkHashRate = 0
  } = inputs;

  if (
    asicCost <= 0 || hashRate <= 0 || power <= 0 || 
    electricityCost < 0 || coinPrice <= 0 || blockReward <= 0 || 
    networkHashRate <= 0
  ) {
    return {
      dailyRevenue: 0,
      dailyPowerCost: 0,
      dailyProfit: 0,
      breakEvenDays: Infinity,
      monthlyProfit: 0,
      yearlyProfit: 0,
      valid: false
    };
  }

  const dailyPowerCost = (power / 1000) * 24 * electricityCost;

  // Approx 144 blocks/day for Bitcoin-like chains
  const dailyBlocks = 144;
  const userShare = hashRate / (networkHashRate * 1000000); // TH/s vs EH/s
  const dailyRevenue = userShare * blockReward * coinPrice * dailyBlocks;

  const dailyProfit = dailyRevenue - dailyPowerCost;
  const breakEvenDays = dailyProfit > 0 ? asicCost / dailyProfit : Infinity;

  const monthlyProfit = dailyProfit * 30;
  const yearlyProfit = dailyProfit * 365;

  return {
    dailyRevenue: dailyRevenue.toFixed(2),
    dailyPowerCost: dailyPowerCost.toFixed(2),
    dailyProfit: dailyProfit.toFixed(2),
    breakEvenDays: breakEvenDays === Infinity ? 'Never' : Math.ceil(breakEvenDays),
    breakEvenMonths: breakEvenDays === Infinity ? 'Never' : (breakEvenDays / 30).toFixed(1),
    monthlyProfit: monthlyProfit.toFixed(2),
    yearlyProfit: yearlyProfit.toFixed(2),
    valid: true
  };
}