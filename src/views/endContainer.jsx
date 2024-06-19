// EndContainer.jsx

import StyleKeep from '../Helpers/StyleKeep';
import { useContext } from 'react';
const EndContainer = () => {


    return (
        <>
            <main className="endGame">
                <StyleKeep/>
                <div className="endGame2">
                    <p>Do you want to end game  ?</p>
                    <div className="button">
                        <button>Yes</button>
                        <button className='no'>No</button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default EndContainer;
