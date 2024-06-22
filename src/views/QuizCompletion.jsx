// EndContainer.js
import StyleKeep from '../Helpers/StyleKeep';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
const QuizCompletion = () => {
    const scoreObject = JSON.parse(localStorage.getItem('scoreObject'));
    const totalScore = scoreObject.wins + scoreObject.lose
    const pecentAge = (scoreObject.wins*totalScore)/100
    const navigate = useNavigate()

    return (
        <>
            <main className="endGame">
            <div className="endGame2">
            <div style={{ width: '180px', height: '180px', marginBottom: '1rem', marginLeft: '12rem' }}>
            <CircularProgressbar
              value={pecentAge}
              text={`${pecentAge}%`}
              styles={buildStyles({
                textColor: '#000',
                pathColor: 'green',
                trailColor: 'red',
                strokeWidth: '12',
              })}
            />
          </div>
                <StyleKeep/>
            
            <div className="congratContainer">
                
           <p style={{fontSize:'1.5rem', fontWeight:'bold'}}>Congratulations!</p>
            <p>Quiz completed successfully. Keep up the good work!</p>
            <p>You attempted {totalScore} questions and from that {scoreObject.wins} questions are correct.</p>

            <div className='btnContainer'>
            <button onClick={() => navigate('/')}>Back to Home</button>
           
          </div> </div>   
                </div>
            </main>
        </>
    );
};


export default QuizCompletion;
