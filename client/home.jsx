import React from 'react';

//import { sendPost } from './helper';

const Home = () => {
  // This will be used to handle a click on a game tile.
  // For now, it redirects to a placeholder link
  const handleGameClick = (gameName) => {
    // Redirect to the reviews page for the clicked game
    window.location = `/reviews/${gameName}`;
  };

  return (
    <div className="gameList">
      <h2>Available Games for Review</h2>
      <div className="game" onClick={() => handleGameClick('overwatch2')}>
        <img src="/assets/img/overwatch2.png" alt="Overwatch 2" />
        <p>Overwatch 2</p>
      </div>
      <div className="game" onClick={() => handleGameClick('eldenring')}>
        <img src="/assets/img/eldenring.png" alt="Elden Ring" />
        <p>Elden Ring</p>
      </div>
      <div className="game" onClick={() => handleGameClick('helldivers2')}>
        <img src="/assets/img/helldivers2.png" alt="Helldivers 2" />
        <p>Helldivers 2</p>
      </div>
    </div>
  );
};

export default Home;
