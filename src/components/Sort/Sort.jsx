import React from "react";
import "./Sort.scss";
import Icon from "../../images/search-language.svg";
import { arrSort } from "../../constants/data";

function Sort() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);

  const sortName = arrSort[selected].text;
  const sortImage = arrSort[selected].image;

  const onClickListIttem = (i) => {
    setSelected(i);
    setOpen(false);
  }

  return (
    <div className="sort">
      <div onClick={() => setOpen(!open)} className='sort__label'>
        <div className="sort__text-box">
          <img className="sort__image" src={sortImage} /> 
          <span className="sort__text option sort__text-option">{sortName}</span>
        </div>

        <img className={`sort__icon ${open ? 'opened' : ''}`} src={Icon} />
      </div>

      {open && (
        <ul className={`sort__popup ${open ? 'active' : ''}`}>

            {arrSort.map((data, i) => (
              <li onClick={() => onClickListIttem(i)} key={i} className={`sort__element sort__link ${selected === i ? "sort__link_active" : ""}`}>
                <img className="sort__icon sort__list-icon" src={data.image}/>
                {data.text}
              </li>
            ))} 

        </ul>
      )}

    </div>
  );
}

export default Sort;
