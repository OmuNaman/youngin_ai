import React from 'react';
import { AlertCircle } from 'lucide-react';

const Error = ({ message }) => {
  return (
    <div className="bg-red-500/50 border border-red-700 p-4 rounded-md text-white font-bold">
      <div className="flex items-center">
        <AlertCircle className="w-6 h-6 mr-2" />
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Error;