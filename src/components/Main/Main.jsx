import React, { useState } from 'react';
import './Main.scss';
import Info from '../Info/Info';
import Input from '../Input/Input';
import AudioRecorder from '../AudioRecorder/AudioRecorder';
import Checkbox from '../Checkbox/Checkbox';
import Results from '../Results/Results';


function Main (props) {
  const [onText, setOnText] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [textRender, setTextRender] = useState(false);

  const { getMessages, handlePopupIsOpen } = props

  const handleContentState = () => {
    setShowInfo(false);
    setShowResults(true);
  }

  const handleTextRender = () => {
    setTextRender(!textRender);
  }

console.log(onText)
  return (
    <main className='content'>

      <div className='content__box'>

        { showInfo ? <Info /> : ''}
        { showResults && <Results textRender={textRender} getMessages={getMessages} handlePopupIsOpen={handlePopupIsOpen} />}

      </div>

    <div className='form-block'>
      { onText ? <Input handleContentState={handleContentState} handleTextRender={handleTextRender} /> : <AudioRecorder handleContentState={handleContentState} getMessages={getMessages} /> }

      <Checkbox setOnText={setOnText} onText={onText} />
    </div> 

    </main>
  )
}

export default Main;