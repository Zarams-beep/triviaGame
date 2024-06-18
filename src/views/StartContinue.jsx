import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const StartContinueStore = () => {
    const [levelStore, setLevelStore] = useState('');
    const [isValidLevel, setIsValidLevel] = useState(true);

    const handleInputChange = (e) => {
        const level = e.target.value.toLowerCase();
        setLevelStore(level);

        if (['easy', 'medium', 'hard'].includes(level)) {
            setIsValidLevel(true); // Set flag to indicate invalid level
        } else {
            setIsValidLevel(false); // Reset flag if level is valid
        }
    };

    // Conditionally render link/button based on isValidLevel flag
    return (
        <>
            <div className="questionIconRed">
                <FaQuestion />
                <FaQuestion style={{marginLeft: '15rem', paddingTop: '1rem'}} />
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

            <div className="inputContainer">
                <input type="text" placeholder="Enter Level" onChange={handleInputChange} />
                {isValidLevel && levelStore!=='' ? (
                    <Link to={`/${levelStore}fetch`}>
                    <button>
                        Enter
                    </button></Link>
                ) : (
                    <button disabled>Enter</button>
                )}
            </div>
        </>
    );
};

export default StartContinueStore;
