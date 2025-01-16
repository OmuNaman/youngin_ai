import React from 'react';
import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <Loader2 className="animate-spin text-accent-primary w-8 h-8" />
    </div>
  );
};

export default Loading;