// src/services/ProfitAnalyzer.js

/**
 * منافع کا تجزیہ کرنے والا فنکشن
 * @param {number} totalIncome - کل آمدنی
 * @param {number} totalExpenses - کل اخراجات
 * @param {number} yieldQuantity - فصل کی کل پیداوار
 * @returns {Object} - منافع کا مکمل تجزیہ
 */
export const calculateProfit = (totalIncome, totalExpenses, yieldQuantity) => {
  const netProfit = totalIncome - totalExpenses;
  const profitMargin = (netProfit / totalIncome) * 100;
  
  // فی کلو پیداوار کی لاگت کا حساب
  const costPerUnit = yieldQuantity > 0 ? (totalExpenses / yieldQuantity).toFixed(2) : 0;

  return {
    netProfit: netProfit.toFixed(2),
    profitMargin: profitMargin.toFixed(2) + "%",
    costPerUnit: costPerUnit,
    status: netProfit > 0 ? "منافع بخش" : "نقصان میں"
  };
};

export default calculateProfit;
