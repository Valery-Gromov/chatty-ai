import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Popup from '../Popup/Popup';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  useEffect(() => {
    if (!currentTitle && value && message) {
      setCurrentTitle(value)
    }

    if (currentTitle && value && message) {
      setPreviousChats(prevChats => (
        [...prevChats, 
          {
            title: currentTitle,
            role: 'user',
            content: value
          },
          {
            title: currentTitle,
            role: message.role,
            content: message.content
          }
        ]
      ))
    }
  }, [message, currentTitle])

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
      console.log(data.choices[0].message.content);
      setMessage(data.choices[0].message)
      localStorage.setItem('editedText', data.choices[0].message.content);
    } catch (error) {
      console.error(error);
    }
  }

  const createNewChat = () => {
    setMessage(null)
    setValue('')
    setCurrentTitle(null)
  }

  const currentChat = previousChats.filter(previousChat => previousChat.title === currentTitle)

  const handlePopupIsOpen = () => {
    setPopupIsOpen(true);
  }

  return (
    <div className="page">
      <Header />
      <Main getMessages={getMessages} handlePopupIsOpen={handlePopupIsOpen} />
      <Popup popupIsOpen={popupIsOpen} setPopupIsOpen={setPopupIsOpen} />
    </div>
  );
}

export default App;
