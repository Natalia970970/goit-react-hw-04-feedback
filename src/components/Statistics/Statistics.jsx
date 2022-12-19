import PropTypes from "prop-types";
import {Option} from './Statistics.styled'


export const Statistics = ({options, stats, totalFeadbacks, positivePersentage}) => {
    return (
    <div>
        {options.map(option => {
            return (
                <Option key={option}>
                    {option}:{stats[option]}
                </Option>
            );
        })}
            <Option>Total:{totalFeadbacks}</Option>
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
    totalFeadbacks: PropTypes.number.isRequired,
    positivePersentage: PropTypes.number.isRequired,
};