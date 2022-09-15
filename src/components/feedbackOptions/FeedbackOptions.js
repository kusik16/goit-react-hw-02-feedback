import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
	return (
		<>
			{options.map((item, i) => (
				<button key={i} onClick={() => onLeaveFeedback(item)}>
					{item}
				</button>
			))}
		</>
	);
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string.isRequired),
	onLeaveFeedback: PropTypes.func.isRequired,
};
