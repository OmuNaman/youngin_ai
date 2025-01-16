import React, { useState } from "react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

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
      <h2 className="text-2xl font-bold mb-4 text-text-primary font-heading">
        Paste Your Code Here
      </h2>
      <Editor
      value={code}
      onValueChange={setCode}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
        backgroundColor: '#27272a',
        color: '#fafafa'
      }}
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