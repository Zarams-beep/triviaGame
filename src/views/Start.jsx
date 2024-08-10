import { Link } from "react-router-dom";
import StyleKeep from '../Helpers/StyleKeep';
const Start=()=>{

    return(
        <>
         <StyleKeep/>
            <div className="gameStartContainer">
              
                    <div className="divFlex">
                    <p className="startContainer">HOW MUCH DO YOU
                        <br /> <span style={{paddingLeft:'5rem'}}>KNOW QUIZ</span></p>
                    </div>
                    <div className="divFlex2">
                    <button className="startBtn">
                        <Link to="/startContinue" style={{textDecoration:'none', color:'white'}}>Start</Link>
                        
                    </button>
                    </div>
                
            </div>
        </>
    )
}
export default Start