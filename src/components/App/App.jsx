import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Popup from '../Popup/Popup';
import { useEffect, useState } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

function App() {
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [updateText, setUpdateText] = useState(false);
  const [lang, setLang] = useState('English');

  const getMessages = async (value) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: `Отредактируй этот текст: ${value}`
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }

    try {
      const response = await fetch('http://localhost:8000/competions', options)
      const data = await response.json();
      console.log(data);
      setMessage(data.choices[0].message);
      localStorage.setItem('editedText', data.choices[0].message.content);
      setUpdateText(!updateText);
    } catch (error) {
      console.error(error);
    }
  }

  const fixTextErorrs = async (value) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: `Убери из этого текста все грамматические, орфографические, пунктуационные и другие ошибки: ${value}`
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }

    try {
      const response = await fetch('http://localhost:8000/competions', options)
      const data = await response.json();
      console.log(data);
      setMessage(data.choices[0].message);
      localStorage.setItem('editedText', data.choices[0].message.content);
      setUpdateText(!updateText);
    } catch (error) {
      console.error(error);
    }
  }

  const handlePopupIsOpen = () => {
    setPopupIsOpen(true);
  }

  return (
    <LanguageContext.Provider value={{lang, setLang}}> 
    <div className="page">
      <Header />
      <Main getMessages={getMessages} handlePopupIsOpen={handlePopupIsOpen} fixTextErorrs={fixTextErorrs} updateText={updateText} />
      <Popup popupIsOpen={popupIsOpen} setPopupIsOpen={setPopupIsOpen} />
    </div>
    </LanguageContext.Provider>
  );
}

export default App;
