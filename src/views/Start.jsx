import { Link } from "react-router-dom";
import StyleKeep from '../Helpers/StyleKeep';
const Start=()=>{

    return(
        <>
         <StyleKeep/>
            <div className="gameStartContainer">
              
              <div className="secondGameStart">
                <div className="divFlex">
                    <p className="startContainer">HOW MUCH DO YOU
                        <br /> <span className="spanStyle">KNOW QUIZ</span></p>
                    </div>
                    <div className="divFlex2">
                    <button className="startBtn">
                        <Link to="/startContinue" 
                        className="linkStyle">Start</Link>
                        
                    </button>
                    </div>  
              </div>  
            </div>
        </>
    )
}
export default Start