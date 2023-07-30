import Logo from '../../images/logo.svg';
import Sort from '../Sort/Sort';
import React, { useState, useEffect } from "react";
import './Header.scss';
import HistoryIcon from '../../images/history.svg';
import HistoryIconHover from '../../images/history-hover.svg';
import History from '../History/History';

function Header () {
  const [selected, setSelected] = useState(0);
  const [isOpenHistory, setIsOpenHistory] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function closeByOverlay(e) {
    if(e.target === e.currentTarget) {
    setIsOpenHistory(false) 
    } 
  }

  const onClickListIttem = (i) => {
    setSelected(i);
    setIsOpenHistory(false);
    setIsHovered(false);
  }

return (
  <header className="header">

    { isOpenHistory && <History isOpenHistory={isOpenHistory} selected={selected} setIsOpenHistory={setIsOpenHistory} closeByOverlay={closeByOverlay} onClickListIttem={onClickListIttem} /> }

    <div onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsOpenHistory(true)}
          className='header__history' >
      <img className='header__history-image' src={isHovered ? HistoryIconHover : HistoryIcon} />
      <p className={`header__text ${isHovered && 'hover'}`}>История</p>
    </div>

    <img className='header__logo' src={Logo}/>

    <Sort />
    
  </header>
)
}

export default Header;