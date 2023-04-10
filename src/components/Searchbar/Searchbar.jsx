import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { SearchbarEl, SearchForm } from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';

const initialValues = {
    value: '',
};

const Searchbar = ({onSubmit}) => {
    const handleSubmit = (values, {resetForm}) => {
        console.log(values);
        onSubmit(values);
        resetForm();
    };


   return (
        <SearchbarEl>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <SearchForm autoComplete="off" autoFocus>
                    <button type="submit" aria-label="Search">
                        <FaSearch/>
                    </button>
        
                    <Field
                        type="text" 
                        name="value"
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </Formik>
        </SearchbarEl>
   )
}

export default Searchbar;

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
