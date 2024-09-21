import React from 'react';

const DashboardOverview = ({ stats }) => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg mb-6 md:p-6 lg:p-8">
      <h3 className="text-lg md:text-xl font-bold text-gray-700">Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-bold">Tasks Completed</h4>
          <p>{stats.completedTasks}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-bold">Earnings</h4>
          <p>${stats.earnings}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-bold">Feedback Score</h4>
          <p>{stats.feedbackScore} / 5</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
