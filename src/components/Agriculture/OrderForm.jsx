import React, { useState } from 'react';

const OrderForm = ({ product, onConfirm }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div style={{ padding: '20px', background: '#f9f9f9' }}>
      <h3>آرڈر کی تصدیق: {product.name}</h3>
      <label>مقدار:</label>
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={() => onConfirm({ ...product, quantity })}>آرڈر مکمل کریں</button>
    </div>
  );
};

export default OrderForm;
