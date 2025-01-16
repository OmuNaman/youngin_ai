import React, { useState } from "react";
import { Upload } from "lucide-react";

const CodeInput = ({ onCodeSubmit }) => {
  const [code, setCode] = useState("");

  const handleInputChange = (value) => {
    setCode(value);
  };

  const handleSubmit = () => {
    onCodeSubmit(code);
  };

  return (
    <div className="bg-dark-secondary p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-text-primary">
        Paste Your Code Here
      </h2>
      <textarea
        value={code}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Enter your code here..."
        className="w-full h-64 p-4 bg-dark-primary text-text-secondary rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-accent-primary"
      />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-accent-primary hover:bg-accent-secondary text-white font-bold py-2 px-4 rounded-md transition-colors"
      >
        Submit Code
      </button>
    </div>
  );
};

export default CodeInput;