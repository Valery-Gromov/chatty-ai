import React, { useState } from 'react';
import './Main.scss';
import Info from '../Info/Info';
import Input from '../Input/Input';
import AudioRecorder from '../AudioRecorder/AudioRecorder';
import Checkbox from '../Checkbox/Checkbox';
import Results from '../Results/Results';


function Main () {
  const [onText, setOnText] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [showResults, setShowResults] = useState(false);

  const handleContentState = () => {
    setShowInfo(false);
    setShowResults(true);
  }

console.log(onText)
  return (
    <main className='content'>

      <div className='content__box'>

        { showInfo ? <Info /> : ''}
        { showResults && <Results />}

      </div>

    <div className='form-block'>
      { onText ? <Input handleContentState={handleContentState} /> : <AudioRecorder handleContentState={handleContentState} /> }

      <Checkbox setOnText={setOnText} onText={onText} />
    </div> 

    </main>
  )
}

export default Main;