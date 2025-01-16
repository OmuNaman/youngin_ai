import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Upload,
  X,
  AlertCircle,
  Check,
  Loader2,
  Play,
  Pause,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    setError("");
  
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile); // Set the file to state
  };
  

  const handleChange = async (e) => {
    e.preventDefault();
    setError("");
  
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  

  const handleSubmit = async () => {
    if (!file) return;

    setIsSubmitting(true);
    setError(null);
    setReview("");

    // Simulate an API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Here you would normally send the code to your backend for processing
    // For this example, we'll just set a placeholder review
    const generatedReview = `
    Yo, check it, here's da lowdown on ya code, straight up:

    - Line 5: Aight, so you got a variable declared but ain't even usin' it. What's up with that?
    - Line 12: Bruh, that function is longer than my grandma's grocery list. Break that down into smaller pieces, ya feel me?
    - Line 18: You could use a map here instead of that old-school for loop. Keep it clean, G.
    - Overall: Not bad for a rookie, but keep grindin'. You got potential, I see you.
    `;

    setReview(generatedReview);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Youngin AI
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Upload Code File</h1>

          {/* Upload Area */}
          <div
            className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-all ${
              dragActive
                ? "border-purple-500 bg-purple-500/10"
                : "border-gray-600 hover:border-gray-500"
            } ${error ? "border-red-500 bg-red-500/10" : ""}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={inputRef}
              type="file"
              onChange={handleChange}
              className="hidden"
            />

            {!file && (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <Upload className="w-12 h-12 text-gray-400" />
                </div>
                <div>
                  <p className="text-lg">
                    Drag and drop your code file here, or{" "}
                    <button
                      onClick={() => inputRef.current?.click()}
                      className="text-purple-400 hover:text-purple-300"
                    >
                      browse
                    </button>
                  </p>
                </div>
              </div>
            )}

            {file && !error && (
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="text-lg">{file.name}</span>
                  <button
                    onClick={() => setFile(null)}
                    className="p-1 hover:bg-gray-700 rounded"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    "Submit Code"
                  )}
                </button>
              </div>
            )}

            {error && (
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 text-red-500">
                  <AlertCircle className="w-6 h-6" />
                  <span className="text-lg">{error}</span>
                </div>
                <button
                  onClick={() => {
                    setError("");
                    setFile(null);
                  }}
                  className="text-purple-400 hover:text-purple-300"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;