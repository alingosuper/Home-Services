import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const FinancialLedger = ({ transactions = [], totalIncome, totalExpenses }) => {
  const data = {
    labels: ['آمدنی', 'اخراجات'],
    datasets: [
      {
        data: [totalIncome, totalExpenses],
        backgroundColor: ['#4caf50', '#f44336'],
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>مالیاتی خلاصہ</h3>
      <div style={{ width: '250px', margin: 'auto' }}>
        <Pie data={data} />
      </div>
      <h4>تفصیلات:</h4>
      <ul>
        <li>کل آمدنی: {totalIncome} PKR</li>
        <li>کل اخراجات: {totalExpenses} PKR</li>
        <li>خالص منافع: {totalIncome - totalExpenses} PKR</li>
      </ul>
      {transactions.map(t => (
        <div key={t.id} style={{ fontSize: '0.8em', borderBottom: '1px solid #ccc' }}>
          {t.label}: {t.amount} PKR
        </div>
      ))}
    </div>
  );
};

export default FinancialLedger;
