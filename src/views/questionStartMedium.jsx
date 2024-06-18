import React ,{useState, useEffect} from 'react';
import { decodeEntities, shuffleArray } from '../Helpers/callBackFunction';


const MediumStart=()=>{

    // useStates 
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(true)
   const [option,setOption] =useState([])
   const [scoreObject, setScoreObject] = useState({wins:0,lose:0});
   const [selectedAnswer, setSelectedAnswer] = useState('')
   const [index, setIndex] = useState(0)

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
    if (questionData.correct_answer === event) {
        setScoreObject(prevScore => ({
            ...prevScore,
            wins: prevScore.wins + 1
        }));
 
     
    } else {
        setScoreObject(prevScore => ({
            ...prevScore,
            lose: prevScore.lose + 1
        }));
   
    }
    setIndex(prevIndex => prevIndex + 1);
         localStorage.setItem('scoreObject',JSON.stringify(scoreObject));
 
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

            <h2>Questions & Answers</h2>
            <ul className='questionUl'>
             
            <li key={index} className='questionLi'>{questionData && decodeEntities(questionData.question)}

            <ul className='optionUl'>
                {option[index] && option[index].map((answer, idx) => (
                    <li key={idx} className='ww'>
                        <label htmlFor={`option_${idx}`}>
                            <input type="radio" name={`question_${index}`} value={decodeEntities(answer)} id={`option_${idx}`} onChange={()=>setSelectedAnswer(decodeEntities(answer))}/>
                            {decodeEntities(answer)}
                        </label>
                    </li>
                ))}
            </ul>

            </li>
            </ul>
            <button className='btnSubmit' onClick={()=>handleCorrect(questionData,selectedAnswer)}>Next</button></main>
 
        </>
    )
  }
   
}

export default MediumStart