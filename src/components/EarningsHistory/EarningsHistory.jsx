import React from 'react';

const EarningsHistory = ({ earnings }) => {
  return (
    <div className="bg-green-100 p-4 rounded-lg mb-6">
      <h3 className="text-xl font-bold text-gray-700">Earnings History</h3>
      <ul>
        {earnings.map((earning, index) => (
          <li key={index} className="bg-white p-2 rounded my-2">
            <span>{earning.date}</span> - <span>${earning.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EarningsHistory;
