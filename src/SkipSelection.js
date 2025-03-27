import { useState, useEffect } from "react";

const defaultSkips = [
  {"id":1, "size":4, "price_per_week":216, "allowed_on_road":true},
  {"id":2, "size":5, "price_per_week":260, "allowed_on_road":true},
  {"id":3, "size":6, "price_per_week":296, "allowed_on_road":true},
  {"id":4, "size":8, "price_per_week":294, "allowed_on_road":true},
  {"id":5, "size":10, "price_per_week":369, "allowed_on_road":false},
  {"id":6, "size":12, "price_per_week":407, "allowed_on_road":false},
  {"id":7, "size":14, "price_per_week":477, "allowed_on_road":false},
  {"id":8, "size":16, "price_per_week":571, "allowed_on_road":false},
  {"id":9, "size":20, "price_per_week":763, "allowed_on_road":false},
  {"id":10, "size":40, "price_per_week":836, "allowed_on_road":false}
];

export default function SkipSelection() {
  const [skips, setSkips] = useState(defaultSkips);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          const mergedSkips = defaultSkips.map(defaultSkip => {
            const fetchedSkip = data.find(skip => skip.id === defaultSkip.id);
            return fetchedSkip ? { ...defaultSkip, ...fetchedSkip, price_per_week: fetchedSkip.price_per_week ?? defaultSkip.price_per_week } : defaultSkip;
          });
          setSkips(mergedSkips);
        } else {
          throw new Error("Unexpected data format");
        }
      })
      .catch(error => {
        console.error("Failed to fetch skips:", error);
        setError(error.message);
      });
  }, []);

  const handleBack = () => {
    setSelectedSkip(null);
  };

  const handleContinue = () => {
    alert(`Continue with ${selectedSkip.size} yard skip`);
  };

  return (
    <>
      <style>{`
        .skip-selection-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a202c, #2d3748);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1 rem;
          font-family: Arial, sans-serif;
          position: relative;
          padding-bottom: 5rem; /* Add padding at the bottom to avoid overlap */
        }

        .skip-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          width: 100%;
          max-width: 1200px;
        }

        .skip-card {
          background: #2d3748;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
          transform-origin: center;
          border: 2px solid transparent;
        }

        .skip-card:hover:not(.skip-card-selected) {
          border: 2px solid rgb(37, 58, 110);
          background: rgba(59, 45, 136, 0.5); 
        }

        .skip-card-selected {
          border: 2px solid rgb(24, 8, 253);
          background: rgba(15, 71, 161, 0.61);
        }

        .skip-card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .skip-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.8);
          transition: transform 0.3s ease;
        }

        .skip-card:hover .skip-card-image img {
          transform: scale(1.1);
        }

        .skip-size-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: #1518BB;
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          font-size: 0.75rem;
          z-index: 10;
        }

        .skip-private-badge {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: #fbbf24;
          color: black;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          font-size: 0.75rem;
          z-index: 10;
        }

        .skip-card-content {
          padding: 1rem;
          color: white;
        }

        .skip-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .skip-card-details {
          color: #a0aec0;
          margin-bottom: 0.5rem;
        }

        .skip-card-price {
          color: #0037C1;
          font-size: 1.5rem;
          font-weight: 700;
          display: flex;
          align-items: baseline;
        }

        .skip-card-price .price-value {
          margin-right: 0.2rem;
        }

        .skip-select-button {
          width: 100%;
          padding: 1rem;
          background: #4a5568;
          color: white;
          border: none;
          border-radius: 8px;
          margin-top: 1rem;
          transition: background-color 0.3s ease;
          cursor: pointer;
          font-size: 1.1rem;
        }

        .skip-select-button:hover {
          background: #3182ce;
        }

        .skip-select-button-selected {
          background: #0037C1;
          color: white;
        }

        .page-title {
          text-align: center;
          color: white; 
          margin-bottom: 1rem;
        }

        .page-subtitle {
          text-align: center;
          color: #a0aec0;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .bottom-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: #2d3748;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 21rem;
          border-top: 2px solid rgb(78, 99, 87);
          z-index: 1000;
          opacity: 0;
          transform: translateY(100%);
          animation: slideUp 0.5s forwards;
        }

        .bottom-bar-details {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-left: 2rem;
        }

        .bottom-bar-buttons {
          display: flex;
          gap: 1rem;
        }

        .bottom-bar-button {
          padding: 1rem 1.5rem;
          background: #4a5568;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          font-size: 1.2rem;
        }

        .bottom-bar-button:hover {
          background: #3182ce;
        }

        .bottom-bar-button-continue {
          background: #0037C1;
          color: white;
        }

        .bottom-bar-pound-highlight {
          color: #0037C1;
          font-size: 1.3rem;
          font-weight: bold;
          margin-right: 0.2rem;
        }

        .bottom-bar-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .bottom-bar-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="skip-selection-container">
        <h2 className="page-title">Choose Your Preferred Skip Size</h2>
        <p className="page-subtitle">Select the skip size that best suits your needs</p>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        <div className="skip-grid">
          {skips.map((skip) => (
            <div
              key={skip.id}
              className={`skip-card ${selectedSkip === skip ? 'skip-card-selected' : ''}`}
              onClick={() => setSelectedSkip(skip)}
            >
              <div className="skip-card-image">
                <span className="skip-size-badge">{skip.size} Yards</span>
                <img
                  src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
                  alt={`${skip.size} Yards`}
                />
                {!skip.allowed_on_road && (
                  <span className="skip-private-badge">
                    Private Property Only
                  </span>
                )}
              </div>
              <div className="skip-card-content">
                <h3 className="skip-card-title">{skip.size} Yard Skip</h3>
                <p className="skip-card-details">14 day hire period</p>
                <p className="skip-card-price">
                  £<span className="price-value">{skip.price_per_week.toFixed(2)}</span> 
                  <span style={{marginLeft: '0.2rem', fontSize: '1rem'}}>/ week</span>
                </p>
                <button className={`skip-select-button w-full ${selectedSkip === skip ? 'skip-select-button-selected' : ''}`}>
                  {selectedSkip === skip ? 'Selected' : 'Select This Skip ->'}
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedSkip && (
          <div className="bottom-bar">
            <div className="bottom-bar-details">
              <span>{selectedSkip.size} Yard Skip</span>
              <span>
                <span className="bottom-bar-pound-highlight">£</span>{selectedSkip.price_per_week.toFixed(2)} / week
              </span>
              <span>7 day hire</span>
            </div>
            <div className="bottom-bar-buttons">
              <button className="bottom-bar-button" onClick={handleBack}>Back</button>
              <button className="bottom-bar-button bottom-bar-button-continue" onClick={handleContinue}>Continue</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}