import './Card.css'

function Card(props) {
    return (
        <div
            className="card"
            onClick={() => props.handleCardClick(props.info)}
        >
            <h2 className='card__heading'>{props.info.name}</h2>
            <p className='card__paragraph card__paragraph_phone'>{props.info.phone}</p>
            <p className='card__paragraph card__paragraph_email'>{props.info.email}</p>
        </div>
    )
}

export default Card;