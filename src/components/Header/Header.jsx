import Logo from '../../images/logo.svg';
import Sort from '../Sort/Sort';
import React, { useState } from "react";
import './Header.scss';
import HistoryIcon from '../../images/history.svg';
import History from '../History/History';
import '../Animation/Animation.scss';

function Header () {
  const [isOpenHistory, setIsOpenHistory] = useState(false);

return (
  <header className="header">

{
  isOpenHistory ? <History isOpenHistory={isOpenHistory} setIsOpenHistory={setIsOpenHistory} />
  : (
    <div onClick={() => setIsOpenHistory(true)} className='header__history animation__link'>
      <img className='header__history-image' src={HistoryIcon} />
      <p className='header__text'>История</p>
    </div>
  )
}

    <img className='header__logo' src={Logo}/>
    <Sort />
    
  </header>
)
}

export default Header;