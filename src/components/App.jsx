import { Component } from 'react';


export class App extends Component {
  state = {
    good: 1,
    neutral: 2,
    bad: 3
  }

  

  countTotalFeedback = (arrFeadbackValues) => {
    return arrFeadbackValues.reduce((acc, value) => {
      return acc + value
    }, 0);
  }


  countPositiveFeedbackPercentage = (totalFeadbacks, positiveFeedbacks) => {
      return Math.round((positiveFeedbacks / totalFeadbacks) * 100);
  }

  render() {
    const { good, neutral, bad} = this.state;
    const arrFeadbackValues = Object.values(this.state);
    const totalFeadbacks = this.countTotalFeedback(arrFeadbackValues);
    const positiveFeedbacks = good;
    const positivePersentage =
    totalFeadbacks > 0
        ? this.countPositiveFeedbackPercentage(
          totalFeadbacks,
            positiveFeedbacks
          )
        : 0;

    return (
      <div>
          <h1>Please leave feadback</h1>
          <button type='button on' onClick={() => {}}>Good</button>
          <button type='button on' onClick={() => {}}>Neutral</button>
          <button type='button on' onClick={() => {}}>Bad</button>
          <h2>Statistics</h2>
          <p>Good:{good}</p>
          <p>Neutral:{neutral}</p>
          <p>Bad:{bad}</p>
          <p>Total:{totalFeadbacks}</p>
          <p>Positive feadback:{positivePersentage}%</p>
      </div>
    );
  }

};
