import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
	return (
		<>
			{options.map(option => {
				return (
					<button
						key={option.id}
						onClick={() => onLeaveFeedback(option.name)}
					>
						{option.name}
					</button>
				);
			})}
		</>
	);
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};
