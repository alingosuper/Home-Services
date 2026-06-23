
// src/services/mathUtils.js

export const predictYield = (soilQuality, waterLevel, historicAvg) => {

  // سادہ الگورتھم: (مٹی کی زرخیزی * 0.6) + (پانی کی دستیابی * 0.4)

  return (soilQuality * 0.6 + waterLevel * 0.4) * historicAvg;

};





