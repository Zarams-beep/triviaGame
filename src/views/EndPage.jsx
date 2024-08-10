// EndContainer.js
import StyleKeep from '../Helpers/StyleKeep';
import { useNavigate } from 'react-router-dom';
const QuizCompletion = () => {
    const scoreObject = JSON.parse(localStorage.getItem('scoreObject'));
    const totalScore = scoreObject.wins + scoreObject.lose
    const pecentAge = (scoreObject.wins*totalScore)/100
    const navigate = useNavigate()

    return (
        <>
         <StyleKeep/>
            <main className="endGame">
            <div className="endGame2">
              <button className='percentBtn'>
                {pecentAge}%
              </button>
            
            <div className="congratContainer">
                
           <p style={{fontSize:'1.5rem', fontWeight:'bold'}}>Congratulations!</p>
            <p>Quiz completed successfully. Keep up the good work!</p>
            <p>You attempted {totalScore} questions and from that {scoreObject.wins} questions are correct.</p>

            <div className='btnContainer'>
            <button className='goBack' onClick={() => navigate('/')}>Back to Home</button>
           
          </div> </div>   
                </div>
            </main>
        </>
    );
};


export default QuizCompletion;
