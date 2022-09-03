import { Component } from 'react';

import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Statistics from '../statistics/Statistics';
import Section from '../section/Section';
import Notification from '../Notification/Notification';

class App extends Component {
	constructor() {
		super();
		this.state = {
			good: 0,
			neutral: 0,
			bad: 0,
		};
	}

	countTotalFeedback = (...args) => {
		return [...args].reduce((a, b) => a + b, 0);
	};

	countPositiveFeedbackPercentage = (total, positive) => {
		return Math.floor((positive * 100) / total);
	};

	onLeaveFeedback = option => {
		this.setState({
			[option]: this.state[option] + 1,
		});
	};

	render() {
		const { good, neutral, bad } = this.state;
		const total = this.countTotalFeedback(good, neutral, bad);
		const positivePercentage = this.countPositiveFeedbackPercentage(
			total,
			good
		);

		return (
			<>
				<Section title="Please leave feedback">
					<FeedbackOptions
						options={[
							{ name: 'good', id: 1 },
							{ name: 'neutral', id: 2 },
							{ name: 'bad', id: 3 },
						]}
						onLeaveFeedback={this.onLeaveFeedback}
					/>
				</Section>
				<Section title="Statistics">
					{good === 0 && neutral === 0 && bad === 0 ? (
						<Notification message="There is no feedback" />
					) : (
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={total}
							positivePercentage={positivePercentage}
						/>
					)}
				</Section>
			</>
		);
	}
}

export default App;
