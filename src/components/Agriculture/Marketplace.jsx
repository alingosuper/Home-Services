import React, { useState } from 'react';
import ProductList from './ProductList';
import OrderForm from './OrderForm';
import { logExpense } from '../../services/AutoExpenseLogger';

const Marketplace = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleConfirm = (order) => {
    // 1. اخراجات کو فنانس ماڈیول کے لیے لاگ کریں
    const entry = logExpense(order);
    
    // 2. کسان کو اطلاع دیں
    alert(`آرڈر کامیاب! ${entry.amount} PKR اخراجات میں شامل کر دیے گئے ہیں۔`);
    
    setSelectedProduct(null);
  };

  return (
    <div>
      {!selectedProduct ? (
        <ProductList onBuy={setSelectedProduct} />
      ) : (
        <OrderForm product={selectedProduct} onConfirm={handleConfirm} />
      )}
    </div>
  );
};

export default Marketplace;
