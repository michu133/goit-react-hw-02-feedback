import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addStats = option => {
    this.setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const result = this.state.good + this.state.neutral + this.state.bad;
    return result;
  };

  countPositiveFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;

    const result = ((this.state.good / total) * 100).toFixed(0);
    return Number(result);
  };

  render() {
    return (
      <div>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.addStats}
            ></FeedbackOptions>
          }
        ></Section>
        <Section
          title="Statistics"
          children={
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedback()}
            ></Statistics>
          }
        ></Section>
      </div>
    );
  }
}
