import { useEffect, useState, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import closeButtonImage from '../../images/x.svg'

function Popup(props) {
    const { popupIsOpen, setPopupIsOpen, updateOriginalText } = props;
    const {lang} = useContext(LanguageContext);
    const [originalText, setOriginalText] = useState(null);

    useEffect(() => {
        setOriginalText(localStorage.getItem('original-text'))
    }, [updateOriginalText])

    const handlePopupClose = () => {
        setPopupIsOpen(false);
    }
    

    return (
        <div className={popupIsOpen ? 'popup popup_active' : 'popup'}>
            <div className='popup__container'>
                <div>
                    <h3 className='popup__title'>{lang === 'Russian' ? 'Оригинальный текст' : 'The original text'}</h3>
                    <button className='popup__close-button' onClick={handlePopupClose}><img src={closeButtonImage} alt="close" /></button>
                </div>
                <p className='popup__text'>
                    {originalText}
                </p>
            </div>
        </div>
    );
}

export default Popup;