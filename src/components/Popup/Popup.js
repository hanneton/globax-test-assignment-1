import './Popup.css';

function Popup(props) {
    function onClose(e) {
        if ((e.target === e.currentTarget) || (e.target.classList.contains('popup__close-btn'))) {
            props.handleClosePopup();
        }
    }
    return (
        <div
            onClick={onClose}
            className='popup-background'>
            <div className='popup'>
                <div className='popup__container'>
                    <h2 className='popup__heading'>
                        {props.currentUser.name}
                    </h2>
                    <button
                        className='popup__close-btn'
                        onClick={onClose}
                    ></button>
                </div>
                <ul className='popup__list'>
                    <li className='popup__list-item'>
                        <h3 className='popup__list-item-title'>Телефон:</h3>
                        <p className='popup__list-item-paragraph'>{props.currentUser.phone}</p>
                    </li>
                    <li className='popup__list-item'>
                        <h3 className='popup__list-item-title'>Почта:</h3>
                        <p className='popup__list-item-paragraph'>{props.currentUser.email}</p>
                    </li>
                    <li className='popup__list-item'>
                        <h3 className='popup__list-item-title'>Дата приема:</h3>
                        <p className='popup__list-item-paragraph'>{props.currentUser.hire_date}</p>
                    </li>
                    <li className='popup__list-item'>
                        <h3 className='popup__list-item-title'>Должность:</h3>
                        <p className='popup__list-item-paragraph'>{props.currentUser.position_name}</p>
                    </li>
                    <li className='popup__list-item'>
                        <h3 className='popup__list-item-title'>Подразделение:</h3>
                        <p className='popup__list-item-paragraph'>{props.currentUser.department}</p>
                    </li>
                </ul>
                <h3 className='popup__subheading'>Дополнительная информация:</h3>
                <p className='popup__list-item-paragraph'>{props.currentUser.address}</p>
            </div>
        </div>
    )
}

export default Popup;