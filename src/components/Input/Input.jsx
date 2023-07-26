import React, { useState } from 'react';
import './Input.scss';
import SendButton from '../../images/send-message.svg';

function Input () {
  const [onLoading, setOnLoading] = useState(false)
  const [isValid, setIsValid] = useState(true);
  const [search, setSearch] = useState('');

  function handleSearch(e) {
    setIsValid(e.target.form.checkValidity());
    setSearch(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    // localStorage.setItem(searchType, search);
    console.log('submit')
  }

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
        >
          <img src={SendButton} className='form__icon' alt="Иконка кнопки поиска. Луппа." />
        </button>

    </form>
  );
}

export default Input;