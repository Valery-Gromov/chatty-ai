import React, { useState } from 'react';
import './Input.scss';
import SendButton from '../../images/send-message.svg';
import SendButtonActive from '../../images/send-message-active.svg';

function Input (props) {
  const [onLoading, setOnLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [search, setSearch] = useState('');

  const { handleContentState, handleTextRender } = props;


  function handleSearch(e) {
    setSearch(e.target.value);
    if (e.target.value !== '') {
    setIsValid(e.target.form.checkValidity());
    } else {
      setIsValid(false);
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleTextRender();
    localStorage.setItem('original-text', search);
    localStorage.setItem('editedText', search);
    // getMessages(search);
    console.log('submit');
  }

  console.log(search);

  return (
    <form className='form' onSubmit={handleFormSubmit} noValidate>

        <input
          className="form__input"
          type="text"
          placeholder="Введите запрос"
          onChange={handleSearch}
          value={search}
          id="search"
          name="search"
          minLength='1'
          noValidate
        />
        <button className={`form__button`}
          // disabled={!isValid || loading}
          type='submit'
          // className={`search__button ${!isValid || loading ? 'search__button_disabled' : 'animation__button'}`}
          onClick={handleContentState}
        >
          <img src={isValid ? SendButtonActive : SendButton } className='form__icon' alt="Иконка кнопки поиска. Луппа." />
        </button>

    </form>
  );
}

export default Input;