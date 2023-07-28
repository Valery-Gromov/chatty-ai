import React, { useState } from 'react';
import './Main.scss';
import Input from '../Input/Input';
import AudioRecorder from '../AudioRecorder/AudioRecorder';
import Checkbox from '../Checkbox/Checkbox';


function Main () {
  const [onText, setOnText] = useState(true);

console.log(onText)
  return (
    <main className='content'>

      <div className='content__box'>
    {  onText ?
    (
      <>
      <h1 className='content__title'>Быстрый способ превратить хаотичные мысли в чистый текст</h1>
      <li className='content__container'>
        <ul className='content__card'><p className='content__text'>Диктуйте всё, что у вас на уме</p></ul>
        <ul className='content__card'><p className='content__text'>Говорите, что сделать с текстом</p></ul>
        <ul className='content__card'><p className='content__text'>Получайте результат</p></ul>
      </li> 
      </>
      )  : ''
    }
      </div>

      { onText ? <Input /> : <AudioRecorder /> }

      <Checkbox setOnText={setOnText} onText={onText} />
      
    </main>
  )
}

export default Main;