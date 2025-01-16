import React, { useState } from "react";
import Header from "./components/Header";
import CodeInput from "./components/CodeInput";
import ReviewOutput from "./components/ReviewOutput";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCodeSubmit = async (code) => {
    setIsLoading(true);
    setError(null);
    setReview("");

    try {
      // Simulate an API call
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
    } catch (err) {
      setError("Failed to get code review. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-dark-primary text-text-primary min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CodeInput onCodeSubmit={handleCodeSubmit} />
          <div>
            {isLoading ? (
              <Loading />
            ) : error ? (
              <Error message={error} />
            ) : (
              <ReviewOutput review={review} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;