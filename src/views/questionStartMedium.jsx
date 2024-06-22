import {useState, useEffect} from 'react';
import { decodeEntities, shuffleArray } from '../Helpers/callBackFunction';
import StyleKeep from '../Helpers/StyleKeep';
import Modal from 'react-modal';

const MediumStart=()=>{

    // useStates 
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(true)
   const [option,setOption] =useState([])
   const [scoreObject, setScoreObject] = useState({wins:0,lose:0});
   const [selectedAnswer, setSelectedAnswer] = useState('')
   const [index, setIndex] = useState(0)
   const [isModalOpen,setIsModalOpen] = useState(false)

//    useEffect to call fetch data function
   useEffect(()=>{
    fetchData();
   },[]);

//    get data from api
   const fetchData = async ()=>{
    try{
        const response = await fetch ('https://opentdb.com/api.php?amount=50&category=9&difficulty=hard&type=multiple')

        if (!response.ok){
            throw new Error ('Network is not okay')
        }

            const jsonData = await response.json()
            setData(jsonData)
            setLoading(false)
    }
    catch (error){
        console.error('Fetch data error: ', error)
    }
   };

   const handleCorrect = (questionData,event) => {
    let updatedScoreObject;
    if (questionData.correct_answer === event) {
        updatedScoreObject = { ...scoreObject, wins: scoreObject.wins + 1 };
 
     
    } else {
        updatedScoreObject = { ...scoreObject, lose: scoreObject.lose + 1 };
   
    }
    setScoreObject(updatedScoreObject);
     // Save to localStorage
     localStorage.setItem('scoreObject', JSON.stringify(updatedScoreObject));

     setIndex(prevIndex => prevIndex + 1);
     setSelectedAnswer('');
        
}



//    put all options in a list with us effect
useEffect(()=>{
    if(data&&data.results){
        const newOptions=data.results.map(element=>{
            return shuffleArray([...element.incorrect_answers, element.correct_answer])
        })
        setOption(newOptions)
    }
},[data])



if(loading|| !data || !data.results){
    return <p>Loading...</p>;
}
else{
    const questionData = data.results[index];
    return(
        <>
        <main className="questionContainer">
            <StyleKeep/>

            <h2>Questions & Answers ({index}/50)</h2>
            <ul className='questionUl'>
             
            <li key={index} className='questionLi' style={{wordWrap:'break-word'}}>{questionData && decodeEntities(questionData.question)}

            <ul className='optionUl'>
                {option[index] && option[index].map((answer, idx) => (
                    <li key={idx} className='optionli'>
                        <label htmlFor={`option_${idx}`}>
                            <input type="radio" name={`question_${index}`} value={decodeEntities(answer)} id={`option_${idx}`} onChange={()=>setSelectedAnswer(decodeEntities(answer))} style={{cursor:'pointer'}}/>
                            {decodeEntities(answer)}
                        </label>
                    </li>
                ))}
            </ul>

            </li>
            </ul>

            <div className="buttonsEnd">
                <button className='btnSubmit' onClick={()=>handleCorrect(questionData,selectedAnswer)}>Next</button>

                <button className="btnEnd" onClick={() => setIsModalOpen(true)}>End</button>
                
                <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modelStyle" contentLabel='Confirmation Model'>
                    {
                        <>
                            <h2>Are you sure you want to submit?</h2>
                            <div className='btnContainer'>
                            <button style={{backgroundColor:'red'}} onClick={() => setIsModalOpen(false)}>
                                Cancel
                            </button>
                            <button onClick={()=>{window.location.href='/quiz-completion'}} >
                                Submit
                            </button>
                            </div>
                        </>
                    }
                </Modal>

                    </div>
            </main>
 
        </>
    )
  }
   
}

export default MediumStart