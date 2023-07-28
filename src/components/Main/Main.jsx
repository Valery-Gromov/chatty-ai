import React, { useState } from 'react';
import './Main.scss';
import Info from '../Info/Info';
import Input from '../Input/Input';
import AudioRecorder from '../AudioRecorder/AudioRecorder';
import Checkbox from '../Checkbox/Checkbox';


function Main () {
  const [onText, setOnText] = useState(true);

console.log(onText)
  return (
    <main className='content'>

      <div className='content__box'>

        {  onText ? <Info /> : ''}

      </div>

    <div className=''>
      {/* { onText ? <Input /> : <AudioRecorder /> } */}

      {/* <Checkbox setOnText={setOnText} onText={onText} /> */}
    </div>  
    </main>
  )
}

export default Main;