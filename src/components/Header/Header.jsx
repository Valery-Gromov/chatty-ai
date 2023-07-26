import Logo from '../../images/logo.svg';
import Sort from '../Sort/Sort';
import './Header.scss';

function Header () {
return (
  <header className="header">

    <div className='header__hidden-element'></div>
    <img className='header__logo' src={Logo}/>
    <Sort />
    
  </header>
)
}

export default Header;