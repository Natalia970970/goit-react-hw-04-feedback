import PropTypes from "prop-types";
import {ButtonList, Button} from './FeedbackOptions.styled'

export const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return (
        <ButtonList>
            {options.map(option => (
                <li key={option}>
                    <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
                </li>
            ))}
        </ButtonList>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
};