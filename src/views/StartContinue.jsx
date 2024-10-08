// StartContinueStore.jsx
import { Link } from "react-router-dom";
import { useState} from "react";
import StyleKeep from "../Helpers/StyleKeep";
const StartContinueStore = () => {
    const [levelStore, setLevelStore] = useState('');
    const [isValidLevel, setIsValidLevel] = useState(true);

    const handleInputChange = (e) => {
        const level = e.target.value.toLowerCase().trim();
        setLevelStore(level);
        if (['easy', 'medium', 'hard'].includes(level)) {
            setIsValidLevel(true);
        } else {
            setIsValidLevel(false);
        }
    };

    return (
        <>
        <StyleKeep/>
      <div className="inputContainer">

        <input type="text" placeholder="Enter 'Easy', 'Medium' or 'Hard'" onChange={handleInputChange} />
          
        {isValidLevel && levelStore !== '' ? (
          <Link to={`/${levelStore}fetch`}>
            <button>Enter</button>
          </Link>
        ) : (
          <button disabled>Enter</button>
        )
        }
      </div>
        </>
    );
    
};
export default StartContinueStore;
