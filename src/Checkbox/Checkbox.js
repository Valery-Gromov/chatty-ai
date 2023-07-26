import React, { useState } from 'react';
import './Checkbox.css';

function Checkbox({ filter, isChecked, handleCheckbox }) {
  const [onText, setOnText] = useState(true);
  
  return (
    <div className={`filter ${filter} ${isChecked ? 'check-active' : ''}`}>
      <div className='filter__checkbox animation__button' onClick={handleCheckbox}>
        <span className='filter__checkbox-switch' />
        <label><input type='checkbox' checked={isChecked} name="checkbox" onChange={handleCheckbox} ></input></label>
      </div>
      <p className='filter__text'>Короткометражки</p>
    </div>
  );
}

export default Checkbox;