import deleteButton from '../../images/delete.svg';
import copyButton from '../../images/copy.svg';
import shareButton from '../../images/share.svg';
import { useEffect, useState } from 'react';

function Results(props) {
    const [editedText, setEditedText] = useState(null);
    const { textRender, getMessages, handlePopupIsOpen } = props;

    useEffect(() => {
        const text = localStorage.getItem('editedText');
        setEditedText(text);

        console.log(editedText);
    }, [textRender])

    const handleEditTransformButton = () => {

        getMessages(editedText);
    }

    return (
        <div className="results">
            <div className='results__content'>
                <div className="results__title-container">
                    <div>
                        <h2 className="result__title">
                            Ваша заметка
                        </h2>
                        <span className="results__date" >
                            от 24 июля 2023
                        </span>
                    </div>
                    <button className="results__open-button" onClick={handlePopupIsOpen}>
                        Открыть оригинальный текст
                    </button>
                </div>
                <textarea className="results__text" value={editedText || ''} />
                <div className="results__buttons-container">
                    <button className="results__option-button"><img src={deleteButton} /></button>
                    <button className="results__option-button"><img src={copyButton} /></button>
                    <button className="results__option-button"><img src={shareButton} /></button>
                </div>
            </div>
            <div className='results__transform-buttons-container'>
                <button className="results__transform-button" onClick={handleEditTransformButton}>🧠 Переписать</button>
                <button className="results__transform-button">📝 Исправить ошибки</button>
            </div>
        </div>
    );
}

export default Results;