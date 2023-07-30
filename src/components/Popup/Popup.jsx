import { useEffect, useState } from 'react';
import closeButtonImage from '../../images/x.svg'

function Popup(props) {
    const { popupIsOpen, setPopupIsOpen } = props;
    const [originalText, setOriginalText] = useState(null);

    useEffect(() => {
        setOriginalText(localStorage.getItem('original-text'))
    })

    const handlePopupClose = () => {
        setPopupIsOpen(false);
    }
    

    return (
        <div className={popupIsOpen ? 'popup popup_active' : 'popup'}>
            <div className='popup__container'>
                <div>
                    <h3 className='popup__title'>Оригинальный текст</h3>
                    <button className='popup__close-button' onClick={handlePopupClose}><img src={closeButtonImage} alt="закрыть" /></button>
                </div>
                <p className='popup__text'>
                    {originalText}
                </p>
            </div>
        </div>
    );
}

export default Popup;