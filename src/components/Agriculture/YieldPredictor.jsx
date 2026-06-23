
// src/components/Agriculture/YieldPredictor.jsx
import React, { useState } from 'react';

const YieldPredictor = ({ mapData }) => {
  const [prediction, setPrediction] = useState(null);

  const calculateYield = () => {
    // mapData میں Core-Lib سے آئے ہوئے پوائنٹس ہوں گے
    const { soilQuality, waterAvailability, areaSize } = mapData;
    
    // بنیادی فارمولا: (زرخیزی * پانی) * رقبہ = تخمینہ پیداوار (کلوگرام میں)
    const baseYield = (soilQuality * waterAvailability) * areaSize;
    const finalPrediction = (baseYield * 0.85).toFixed(2); // 15% مارجن آف ایرر کے ساتھ
    
    setPrediction(finalPrediction);
  };

  return (
    <div className="predictor-card">
      <h3>پیداوار کی پیشن گوئی</h3>
      <button onClick={calculateYield}>تخمینہ لگائیں</button>
      {prediction && (
        <div className="result">
          <p>متوقع پیداوار: <strong>{prediction} کلوگرام</strong></p>
          <small>* یہ تخمینہ مقامی ڈیٹا کی بنیاد پر ہے۔</small>
        </div>
      )}
    </div>
  );
};

export default YieldPredictor;

