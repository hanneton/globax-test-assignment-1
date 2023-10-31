import './SearchBar.css'
function SearchBar(props) {
    return (
        <form className="search-bar content__search-bar">
            <input
                className="search-bar__input"
                type="text"
                onChange={(e) => props.handleChange(e.target.value)}
            ></input>
        </form>
    )
}

export default SearchBar;