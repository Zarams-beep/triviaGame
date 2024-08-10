const ScoreBoard = () => {
   // Retrieve scoreObject from localStorage
   const storedScoreObject = JSON.parse(localStorage.getItem('scoreObject')) || { wins: 0, lose: 0 };

   console.log(storedScoreObject); // Check the output in console for debugging

   const handleRestart = () => {
    localStorage.removeItem('scoreObject');
    // Optionally, you may want to reload the page or reset the state here
 };
   return (
    <>
    
    
      <div>
         <h2>ScoreBoard</h2>
         <p>Wins: {storedScoreObject.wins}</p>
         <p>Lose: {storedScoreObject.lose}</p>
      </div>
      <button onClick={handleRestart}>restart</button>
      </>
   );
};

export default ScoreBoard;
