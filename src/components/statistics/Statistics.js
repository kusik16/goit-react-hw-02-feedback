import { Component } from 'react';
import PropTypes from 'prop-types';


class Statistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <div>Statistics</div>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
        <div>Total: {total}</div>
        <div>Positive: {positivePercentage}%</div>
      </>
    );
  }
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};