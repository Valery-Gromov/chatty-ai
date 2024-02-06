import React, { useState } from 'react';
import './Input.scss';
import SendButton from '../../images/send-message.svg';
import SendButtonActive from '../../images/send-message-active.svg';
import { LanguageContext } from '../../contexts/LanguageContext';

function Input(props) {
  const [onLoading, setOnLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [search, setSearch] = useState('');
  const { lang } = React.useContext(LanguageContext);

  const { editUserRequest, handleContentState, handleResponseUpdate, handleOriginalText } = props;

  function handleSearch(e) {
    setSearch(e.target.value);
    if (e.target.value !== '') {
      setIsValid(e.target.form.checkValidity());
    } else {
      setIsValid(false);
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await editUserRequest(search);
    localStorage.setItem('original-text', search);
    handleResponseUpdate();
    handleOriginalText();
    console.log('submit');
  };

  return (
    <form className="form" onSubmit={handleFormSubmit} noValidate>
      <input
        className="form__input"
        type="text"
        placeholder={lang === 'Russian' ? 'Введите запрос' : 'Enter a request'}
        onChange={handleSearch}
        value={search}
        id="search"
        name="search"
        minLength="1"
        noValidate
      />
      <button
        className={`form__button`}
        // disabled={!isValid || loading}
        type="submit"
        // className={`search__button ${!isValid || loading ? 'search__button_disabled' : 'animation__button'}`}
        onClick={handleContentState}>
        <img
          src={isValid ? SendButtonActive : SendButton}
          className="form__icon"
          alt="The icon of the search button. Luppa."
        />
      </button>
    </form>
  );
}

export default Input;
