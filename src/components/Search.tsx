import IconSearch from './icons/IconSearch';
import { useEffect, useState } from 'react';
import { search } from 'src/api/ghost';
import useDebounce from 'src/hooks/deboune';



const Search = (props) => {

    const handleInputChange = (event) => {
        event.persist();
        setTerm(event.target.value);
      }

    const [result, setResult] = useState();
    const [term, setTerm] = useState();
    const debouncedSearchTerm = useDebounce(term, 300);

    useEffect(() => {
        console.log(term);
        search(term).then(res => console.log(res));
    }, [debouncedSearchTerm])

    return (
        <div className={props.className}>
            <div className="search">
                <input className="search__input" placeholder="Search for posts or tags" value={term} onChange={handleInputChange}></input>
                <IconSearch className="search__icon"/>
            </div>
        </div>
    )
}

export default Search;