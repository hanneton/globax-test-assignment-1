import './Cardlist.css'
import Card from '../Card/Card'

function Cardlist(props) {
    return (
        <section className='cardlist'>
            {props.users.map((el, i) => <Card key={i} handleCardClick={props.handleCardClick} info={el} />)}
        </section>
    )
}

export default Cardlist;