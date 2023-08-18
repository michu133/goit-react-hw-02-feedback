import propTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div>
      {total === 0 ? (
        <h3>There is no feedback</h3>
      ) : (
        <div>
          <h3>Good: {good}</h3>
          <h3>Neutral: {neutral}</h3>
          <h3>Bad: {bad}</h3>
          <h3>Total: {good + bad + neutral}</h3>
          <h3>Positive feedback: {positiveFeedback}%</h3>
        </div>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positiveFeedback: propTypes.number,
};
