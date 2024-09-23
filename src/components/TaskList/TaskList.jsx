import React from 'react';

const TaskList = ({ tasks, updateTaskStatus }) => {
  return (
    <div className="bg-yellow-100 p-4 rounded-lg mb-6 md:p-6 lg:p-8">
      <h3 className="text-lg md:text-xl font-bold text-gray-700">Your Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="bg-white p-3 rounded my-2 flex justify-between items-center shadow">
            <span>{task.name}</span>
            <button
              onClick={() => updateTaskStatus(task.id)}
              className={`py-1 px-3 rounded ${task.status === 'completed' ? 'bg-green-500' : 'bg-red-500'} text-white`}
            >
              {task.status === 'completed' ? 'Completed' : 'Mark Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
