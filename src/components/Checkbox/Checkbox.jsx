import React, { useState } from "react";
import "./Checkbox.scss";
import MicroMinActive from "../../images/micro-min-active.svg";
import MicroMin from "../../images/micro-min.svg";
import TextMinActive from "../../images/text-min-active.svg";
import TextMin from "../../images/text-min.svg";
import "../Animation/Animation.scss";
import { LanguageContext } from '../../contexts/LanguageContext';

function Checkbox({ onText, setOnText }) {
  const {lang} = React.useContext(LanguageContext);
    // const [isChecked, setIsChecked] = useState(false);

    function handleCheckbox() {
      setOnText(!onText);
      // localStorage.setItem(checkboxType, JSON.stringify(!isChecked));
    }

  return (
    <div className="rom animation__button">
      {/* <label><input className="checkbox__invisible" name="checkbox" type="checkbox" checked={onText} /></label> */}

      <div className="checkbox" onClick={handleCheckbox}>
        <div className={`checkbox__element ${onText ? "" : "active"}`}>
          <img className="checkbox__icon" src={onText ? MicroMin : MicroMinActive} />
          <p className="checkbox__text">{lang === 'Russian' ? 'Голос' : 'Voice'}</p>
        </div>

        <div className={`checkbox__element ${onText ? "active" : ""}`}>
          <img className="checkbox__icon" src={onText ? TextMinActive : TextMin}/>
          <p className="checkbox__text">{lang === 'Russian' ? 'Текст' : 'Text'}</p>
        </div>
      </div>

    </div>
  );
}

export default Checkbox;
