import IconSearch from './icons/IconSearch';

const Search = (props) => {
    return (
        <div className={props.className}>
            <div className="search">
                <input className="search__input" placeholder="Search for posts or tags"></input>
                <IconSearch className="search__icon"/>
            </div>
        </div>
    )
}

export default Search;