// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './views/Start';
import EasyStart from './views/questionStartEasy';
import MediumStart from './views/questionStartMedium';
import HardStart from './views/questionStartHard';
import StartContinueStore from './views/StartContinue';
import ScoreBoard from './views/scoreBoard';
import QuizCompletion from './views/QuizCompletion';

const App = () => {
  return (
    <Router>
      <div>

        <Routes>
          <Route exact path="/" element={ <Start/>} />
          <Route path="/easyfetch" element={ <EasyStart/>} />
          <Route path="/mediumfetch" element={ <MediumStart/>} />
          <Route path="/hardfetch" element={ <HardStart/>} />
          <Route path="/startContinue" element={<StartContinueStore/>} />
          <Route path="/scoreboard" element={<ScoreBoard/>} />
          <Route path='/quiz-completion' element={<QuizCompletion/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;