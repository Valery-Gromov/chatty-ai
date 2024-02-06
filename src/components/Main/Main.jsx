import React, { useState } from 'react';
import './Main.scss';
import Info from '../Info/Info';
import Input from '../Input/Input';
import AudioRecorder from '../AudioRecorder/AudioRecorder';
import Checkbox from '../Checkbox/Checkbox';
import Results from '../Results/Results';


function Main (props) {
  const [onText, setOnText] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [showResults, setShowResults] = useState(false);

  const { editUserRequest, handlePopupIsOpen, fixTextErorrs, responseUpdate, handleOriginalText, handleResponseUpdate, handleDeleteResponse } = props

  const handleContentState = () => {
    setShowInfo(false);
    setShowResults(true);
  }


  return (
    <main className='content'>

      <div className='content__box'>

        { showInfo ? <Info /> : ''}
        { showResults && <Results editUserRequest={editUserRequest} handlePopupIsOpen={handlePopupIsOpen} fixTextErorrs={fixTextErorrs} responseUpdate={responseUpdate} handleDeleteResponse={handleDeleteResponse} />}

      </div>

    <div className='form-block'>
      { onText ? <Input editUserRequest={editUserRequest} handleContentState={handleContentState} handleResponseUpdate={handleResponseUpdate} handleOriginalText={handleOriginalText} /> : <AudioRecorder handleContentState={handleContentState} editUserRequest={editUserRequest} handleOriginalText={handleOriginalText} /> }

      <Checkbox setOnText={setOnText} onText={onText} />
    </div> 

    </main>
  )
}

export default Main;