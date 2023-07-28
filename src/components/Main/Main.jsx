import React, { useState } from 'react';
import './Main.scss';
import Input from '../Input/Input';
// import AudioRecorder from '../AudioRecorder/AudioRecorder';
import Checkbox from '../Checkbox/Checkbox';


function Main () {
  // const [onText, setOnText] = useState(true);

  return (
    <main className='content'>
      <h1 className='content__title'>Быстрый способ превратить хаотичные мысли в чистый текст</h1>
      <li className='content__container'>
        <ul className='content__card'>Диктуйте всё, что у вас на уме</ul>
        <ul className='content__card'>Говорите, что сделать с текстом</ul>
        <ul className='content__card'>Получайте результат</ul>
      </li>

      

      {/* { onText ? <Input /> : ''} */}
      <Input />
      <Checkbox />
      {/* <AudioRecorder /> */}
    </main>
  )
}

export default Main;