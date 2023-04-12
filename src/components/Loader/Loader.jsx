import { Spinner } from './Loader.styled';
import { Audio } from 'react-loader-spinner';

const Loader = () => {
    return (
        <Spinner>
            <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            />
        </Spinner>
        
    )
};

export default Loader;