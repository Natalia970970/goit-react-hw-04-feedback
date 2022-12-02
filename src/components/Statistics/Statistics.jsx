import PropTypes from "prop-types";
import {Option} from './Statistics.styled'


export const Statistics = ({options, stats, totalFeedbacks, positivePersentage}) => {
    return (
    <div>
        {options.map(option => {
            return (
                <Option key={option}>
                    {option}:{stats[option]}
                </Option>
            );
        })}
            <Option>Total:{totalFeedbacks}</Option>
            <Option>Positive feadback:{positivePersentage}%</Option>
    </div>);
}

Statistics.propTypes = {
    options: PropTypes.array.isRequired,
    stats: PropTypes.exact({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    totalFeedbacks: PropTypes.number.isRequired,
    positivePersentage: PropTypes.number.isRequired,
};