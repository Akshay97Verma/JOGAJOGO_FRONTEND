import React from 'react';

const Notifications = ({ notifications }) => {
  return (
    <div className="bg-pink-100 p-4 rounded-lg mb-6 md:p-6 lg:p-8">
      <h3 className="text-lg md:text-xl font-bold text-gray-700">Notifications</h3>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index} className="bg-white p-2 rounded my-2">
              <p>{notification.message}</p>
              <p><small>{notification.date}</small></p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No new notifications.</p>
      )}
    </div>
  );
};

export default Notifications;
