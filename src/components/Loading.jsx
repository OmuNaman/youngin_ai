import React from "react";
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-accent-primary"></div>
    </div>
  );
};

export default Loading;