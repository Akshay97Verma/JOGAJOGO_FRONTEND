import React from 'react';

const DashboardOverview = ({ stats, newTask, activeForService, medicallyFit }) => {
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
          <p>{stats.earnings} Rs</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-bold">Feedback Score</h4>
          <p>{stats.feedbackScore} / 5</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-bold">New Task</h4>
          <p>{newTask}</p>
        </div>
        <div className="bg-white p-4 rounded shadow flex items-center">
          <h4 className="font-bold mr-2">Active for Service</h4>
          <input type="checkbox" checked={activeForService} readOnly className="h-4 w-4" />
        </div>
        <div className="bg-white p-4 rounded shadow flex items-center">
          <h4 className="font-bold mr-2">Medically Fit</h4>
          <input type="checkbox" checked={medicallyFit} readOnly className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
