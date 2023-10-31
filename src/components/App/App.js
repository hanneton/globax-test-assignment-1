import './App.css';
import Main from '../Main/Main';
import Popup from '../Popup/Popup';
import { useEffect, useState } from 'react';
import api from '../../utils/api';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({});

  function handleClosePopup() {
    setIsPopupOpen(false);
  }

  function handleCardClick(user) {
    setIsPopupOpen(true);
    setCurrentUser(user);
  }

  function handleChange(str) {
    api.getUsers(str)
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    api.getUsers('')
      .then(data => {
        setUsers(data);
        console.log(data);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="page">
      <Main
        isPopupOpen={isPopupOpen}
        handleClosePopup={handleClosePopup}
        handleCardClick={handleCardClick}
        handleChange={handleChange}
        users={users}
      />
      {isPopupOpen && <Popup handleClosePopup={handleClosePopup} currentUser={currentUser} />}
    </div >
  );
}

export default App;
