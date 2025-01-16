import React from 'react';

const ReviewOutput = ({ review }) => {
  return (
    <div className="bg-dark-secondary p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-text-primary">
        AI Code Review
      </h2>
      <p className="text-text-secondary whitespace-pre-line">
        {review ? review : "Awaiting code review..."}
      </p>
    </div>
  );
};

export default ReviewOutput;