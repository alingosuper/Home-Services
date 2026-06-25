import React from 'react';

const products = [
  { id: 1, name: 'کھاد (Fertilizer)', price: 5000, category: 'Fertilizer' },
  { id: 2, name: 'گندم کے بیج', price: 3000, category: 'Seeds' },
  { id: 3, name: 'ٹریکٹر حل', price: 15000, category: 'Machinery' }
];

const ProductList = ({ onBuy }) => {
  return (
    <div>
      <h3>زرعی بازار (Marketplace)</h3>
      {products.map(p => (
        <div key={p.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '5px' }}>
          <strong>{p.name}</strong> - {p.price} PKR
          <button onClick={() => onBuy(p)}>خریدیں</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
