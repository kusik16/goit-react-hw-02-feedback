import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
	return (
		<>
			{options.map(({ id, name }) => {
				return (
					<button key={id} onClick={() => onLeaveFeedback(name)}>
						{name}
					</button>
				);
			})}
		</>
	);
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
				.isRequired,
			name: PropTypes.string.isRequired,
		})
	),
	onLeaveFeedback: PropTypes.func.isRequired,
};
