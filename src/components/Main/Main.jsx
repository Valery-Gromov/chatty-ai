import React, { useState } from 'react';
import './Main.scss';
import Info from '../Info/Info';
import Input from '../Input/Input';
import AudioRecorder from '../AudioRecorder/AudioRecorder';
import Checkbox from '../Checkbox/Checkbox';
import MedRecorder from '../MediaRecorder/MediaRecorder';


function Main () {
  const [onText, setOnText] = useState(true);

  return (
    <main className='content'>

      <div className='content__box'>

        {  onText ? <Info /> : ''}

      </div>

    <div className='form-block'>
      { onText ? <Input /> : <AudioRecorder /> }

      <Checkbox setOnText={setOnText} onText={onText} />
    </div> 

    {/* <MedRecorder /> */}

    </main>
  )
}

export default Main;