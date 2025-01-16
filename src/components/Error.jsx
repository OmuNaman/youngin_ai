import React from 'react';
import { AlertCircle } from 'lucide-react';

const Error = ({ message }) => {
  return (
    <div className="bg-red-500 p-4 rounded-md text-white">
      <div className="flex items-center">
        <AlertCircle className="w-5 h-5 mr-2" />
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Error;