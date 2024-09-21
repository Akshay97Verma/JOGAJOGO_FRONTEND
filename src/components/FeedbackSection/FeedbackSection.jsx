import React from 'react';

const FeedbackSection = ({ feedback }) => {
  return (
    <div className="bg-purple-100 p-4 rounded-lg mb-6 md:p-6 lg:p-8">
      <h3 className="text-lg md:text-xl font-bold text-gray-700">Feedback</h3>
      {feedback.length > 0 ? (
        <ul>
          {feedback.map((item, index) => (
            <li key={index} className="bg-white p-2 rounded my-2">
              <p><strong>{item.customer}</strong>: {item.comment}</p>
              <p>Rating: {item.rating} / 5</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No feedback available.</p>
      )}
    </div>
  );
};

export default FeedbackSection;
