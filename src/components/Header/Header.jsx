import Logo from '../../images/logo.svg';
import Sort from '../Sort/Sort';
import './Header.scss';
import History from '../../images/history.svg';
import '../Animation/Animation.scss';

function Header () {
return (
  <header className="header">

    <div className='header__history animation__link'>
      <img className='header__history-image' src={History} />
      <p className='header__text'>История</p>
    </div>
    <img className='header__logo' src={Logo}/>
    <Sort />
    
  </header>
)
}

export default Header;