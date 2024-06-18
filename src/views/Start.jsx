import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";
const Start=()=>{

    return(
        <>
            <div className="gameStartContainer">
                <div className="questionIconGreen">
                    <FaQuestion />
                    <FaQuestion />
                    <FaQuestion  />
                </div>

                <div className="questionIconRed">
                    <FaQuestion />
                    <FaQuestion style={{marginLeft:'15rem', paddingTop:'1rem'}}/>
                </div>
                
                <div className="questionIconRed2">
                    <FaQuestion />
                    <FaQuestion />
                </div>

                <div className="questionIconGreen2">
                    <FaQuestion />
                    <FaQuestion />
                </div>

                <div className="questionIconLast">
                <FaQuestion style={{color: 'rgba(10, 136, 10, 0.705)'}} />
                    <FaQuestion />
                </div>
               
                    <p className="startContainer">HOW MUCH DO YOU
                        <br /> <span style={{paddingLeft:'5rem'}}>KNOW QUIZ</span></p>

                    <button className="startBtn">
                        <Link to="/startContinue" style={{textDecoration:'none', color:'white'}}>Start</Link>
                        
                    </button>
                
            </div>
        </>
    )
}
export default Start