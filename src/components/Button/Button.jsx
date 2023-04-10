// import PropTypes from 'prop-types';
import { ButtonEl } from "./Button.styled"

const Button = ({onLoadMore}) => {
    return (
        <ButtonEl onClick={onLoadMore}>Load more</ButtonEl>
    )
}

export default Button;