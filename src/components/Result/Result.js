import deleteButton from '../images/delete.svg';
import copyButton from '../images/copy.svg';
import shareButton from '../images/share.svg';
import './Result.css';

function Results() {
    return (
        <div className="results">
            <div className="results__title-container">
                <div>
                    <h2 className="result__title">
                        Ваша заметка
                    </h2>
                    <span className="results__date" >
                        от 24 июля 2023
                    </span>
                </div>
                <button className="results__open-button">
                    Открыть оригинальный текст
                </button>
            </div>
            <textarea className="results__text">
                Эдди припомнил один из летних дней, когда ему было десять лет. Тогда на лесной прогалине любимая подруга детства рассказывала ему о том, что они будут делать, когда вырастут. Ее слова ослепляли сильнее, чем солнце. Он внимал ей с восхищением и удивлением и, когда она спросила, чем бы он хотел заниматься, ответил без промедления:
                – Чем-нибудь правильным, – и добавил: – Надо бы совершить что-нибудь великое… Ну, то есть нам вдвоем.
– Что же именно? – спросила она.
            </textarea>
            <div className="results__buttons-container">
                <button className="results__option-button"><img src={deleteButton} /></button>
                <button className="results__option-button"><img src={copyButton} /></button>
                <button className="results__option-button"><img src={shareButton} /></button>
            </div>
        </div>
    );
}

export default Results;