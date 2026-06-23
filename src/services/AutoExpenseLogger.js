// src/services/AutoExpenseLogger.js

/**
 * مارکیٹ پلیس سے اخراجات کو خودکار طریقے سے لیجر میں شامل کرنا
 * @param {Object} order - آرڈر کی تفصیلات (نام، قیمت، مقدار)
 * @returns {Object} - لیجر میں درج ہونے والا اینٹری فارمیٹ
 */
export const logExpense = (order) => {
  const expenseEntry = {
    id: Date.now(),
    label: `خریداری: ${order.name} (تعداد: ${order.quantity})`,
    amount: order.price * order.quantity,
    date: new Date().toISOString(),
    category: 'زرعی سامان'
  };

  // یہاں آپ اپنے مین اسٹیٹ یا ڈیٹا بیس (جیسے Firebase/LocalStorage) میں یہ اینٹری پش کر سکتے ہیں
  console.log("اخراجات میں درج کیا گیا:", expenseEntry);
  
  return expenseEntry;
};

export default logExpense;
