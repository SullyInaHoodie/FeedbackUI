import { useState } from 'react';
import Confetti from 'react-confetti';
import './tailwind.css';

function App() {
  const [selectedRating, setSelectedRating] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating !== "") {
      setSubmitted(true);
    }
  };

  const ratings = [
    { label: "Unhappy", icon: "fa-frown" },
    { label: "Neutral", icon: "fa-meh" },
    { label: "Happy", icon: "fa-smile" },
  ];

  return (
    <div className="container animate-fadeIn">
      {submitted && <Confetti />}
      {!submitted ? (
        <>
          <h1 className="heading">Feedback UI</h1>
          <div className="rating-container">
            {ratings.map((rating) => (
              <div
                key={rating.label}
                className={`rating ${selectedRating === rating.label ? 'active' : ''}`}
                onClick={() => handleRatingClick(rating.label)}
              >
                <i className={`fas ${rating.icon} fa-3x mb-2`}></i>
                <small>{rating.label}</small>
              </div>
            ))}
          </div>
          <button className="btn animate-bounceIn" onClick={handleSubmit}>Send Reviews</button>
        </>
      ) : (
        <>
          <strong className="text-2xl">Thank you!</strong>
          <br /><br />
          <strong className="text-xl">Feedback: {selectedRating}</strong>
          <p className="mt-2">We'll use your feedback to improve our customer support</p>
        </>
      )}
    </div>
  );
}

export default App;
