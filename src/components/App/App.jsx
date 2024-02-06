import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Popup from '../Popup/Popup';
import { useState } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

function App() {
  const [updateOriginalText, setUpdateOriginalText] = useState(false);
  const [responseUpdate, setResponseUpdate] = useState(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [lang, setLang] = useState('English');

  const editUserRequest = async (value) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: `Make this text structured without changing the language: ${value}`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch('http://localhost:8000/competions', options);
      const data = await response.json();
   
      localStorage.setItem('editedText', data.choices[0].message.content);
      handleResponseUpdate();
    } catch (error) {
      console.error(error);
    }
  };

  const fixTextErorrs = async (value) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: `Remove all grammatical, spelling, punctuation and other errors from this text without changing the language: ${value}`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch('http://localhost:8000/competions', options);
      const data = await response.json();

      localStorage.setItem('editedText', data.choices[0].message.content);
      handleResponseUpdate();
    } catch (error) {
      console.error(error);
    }
  };

  const handlePopupIsOpen = () => {
    setPopupIsOpen(true);
  };

  const handleOriginalText = () => {
    setUpdateOriginalText(!updateOriginalText);
  }

  const handleResponseUpdate = () => {
    setResponseUpdate(!responseUpdate);
  }

  const handleDeleteResponse = () => {
    localStorage.setItem('editedText', '');
    localStorage.setItem('original-text', '');
    handleOriginalText();
    handleResponseUpdate();
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="page">
        <Header />
        <Main
          editUserRequest={editUserRequest}
          handlePopupIsOpen={handlePopupIsOpen}
          fixTextErorrs={fixTextErorrs}
          responseUpdate={responseUpdate}
          handleOriginalText={handleOriginalText}
          handleResponseUpdate={handleResponseUpdate}
          handleDeleteResponse={handleDeleteResponse}
        />
        <Popup popupIsOpen={popupIsOpen} setPopupIsOpen={setPopupIsOpen} updateOriginalText={updateOriginalText} />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
