import React, { useState } from 'react';
import './Checkbox.scss';
import MicroMinActive from '../../images/micro-min-active.svg';
import MicroMin from '../../images/micro-min.svg';
import TextMinActive from '../../images/text-min-active.svg';
import TextMin from '../../images/text-min.svg';

function Checkbox() {
  const [onText, setOnText] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckbox() {
    setIsChecked(!onText);
    // localStorage.setItem(checkboxType, JSON.stringify(!isChecked));
  }
  
  return (
    // <div className={`filter ${filter} ${isChecked ? 'check-active' : ''}`}>
    //   <div className='filter__checkbox animation__button' onClick={handleCheckbox}>
    //     <span className='filter__checkbox-switch' />
    //     <label><input type='checkbox' checked={isChecked} name="checkbox" onChange={handleCheckbox} ></input></label>
    //   </div>
    //   <p className='filter__text'>Короткометражки</p>
    // </div>

    <div className='rom'>
      <label><input className='checkbox__invisible' type='checkbox' name="checkbox" checked={onText} /></label>  

<div className='checkbox' onClick={handleCheckbox}>
        <div className={`checkbox__element ${ onText ? '' : 'active'}`}>
          <img className='checkbox__icon' src={ onText ? MicroMin : MicroMinActive } />
          <p className='checkbox__text'>Голос</p>
        </div>

        <div className={`checkbox__element ${ onText ? 'active' : ''}`}>
          <img className='checkbox__icon' src={ onText ? TextMinActive : TextMin } />
          <p className='checkbox__text'>Текст</p>
        </div>
</div>


        {/* <span className='checkbox__visible' /> */}
    </div>
  );
}

export default Checkbox;