import { Component } from 'react';
import PropTypes from 'prop-types'

class FeedbackOptions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onLeaveFeedback, options } = this.props;
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
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
