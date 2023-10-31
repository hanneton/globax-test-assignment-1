import './Main.css'
import SearchBar from '../SearchBar/SearchBar';
import Cardlist from '../Cardlist/Cardlist'

function Main(props) {
    return (
        <main className='content content__page'>
            <SearchBar
                handleChange={props.handleChange}
            />
            <Cardlist
                handleCardClick={props.handleCardClick}
                users={props.users}
            />
        </main>
    )
}

export default Main;