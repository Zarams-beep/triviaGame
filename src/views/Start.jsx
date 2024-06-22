import { Link } from "react-router-dom";
import StyleKeep from '../Helpers/StyleKeep';
const Start=()=>{

    return(
        <>
         <StyleKeep/>
            <div className="gameStartContainer">
              
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