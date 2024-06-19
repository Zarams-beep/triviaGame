import { FaQuestion } from "react-icons/fa";
const StyleKeep=()=>{
    return(
        <>
            <div className="styleAll">
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
                </div></div>
        </>
    )
   
}
export default StyleKeep