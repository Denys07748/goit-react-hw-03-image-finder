import PropTypes from 'prop-types';
import { SearchbarEl, SearchForm } from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';


const Searchbar = ({onSubmit}) => {
   return (
        <SearchbarEl>
            <SearchForm>
                <button type="submit" aria-label="Search">
                    <FaSearch/>
                </button>

                <input
                type="text"
                // autoComplete="off"
                // autofocus
                placeholder="Search images and photos"
                />
            </SearchForm>
        </SearchbarEl>
   )
}

export default Searchbar;

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
