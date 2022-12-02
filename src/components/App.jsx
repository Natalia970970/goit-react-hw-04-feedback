import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics/Statistics';
import {Option} from '../components/Statistics/Statistics.styled'



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrement = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = (arrFeadbackValues) => {
    return arrFeadbackValues.reduce((acc, value) => {
      return acc + value
    }, 0);
  }


  countPositiveFeedbackPercentage = (totalFeadbacks, positiveFeedbacks) => {
      return Math.round((positiveFeedbacks / totalFeadbacks) * 100);
  }

  render() {
    const arrFeadbackValues = Object.values(this.state);
    const totalFeadbacks = this.countTotalFeedback(arrFeadbackValues);
    const positiveFeedbacks = this.state.good;
    const positivePersentage =
    totalFeadbacks > 0
        ? this.countPositiveFeedbackPercentage(
          totalFeadbacks,
            positiveFeedbacks
          )
        : 0;

    return (
      <div>
          <Section title="Please leave feadback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleIncrement}/>
          </Section>
          <Section title="Statistics">
            {totalFeadbacks !==0 ?
            (<Statistics options={Object.keys(this.state)} stats={this.state} totalFeedbacks={totalFeadbacks} positivePersentage={positivePersentage}/>
            )
            :
            <Option>No feadback given</Option>
          }
          </Section>
      </div>
    );
  }

};
