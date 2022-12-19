import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics/Statistics';
import {Option} from '../components/Statistics/Statistics.styled'


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

    const handleIncrement = type => {
      switch (type) {
        case 'good':
          setGood(prevState => prevState + 1);
          break;
        case 'neutral':
          setNeutral(prevState => prevState + 1);
          break;
        case 'bad':
          setBad(prevState => prevState + 1);
          break;
        default:
          break;
      }
    };
  
  const totalFeadbacks = good + neutral + bad;
  
  const countPositiveFeedbackPercentage = (totalFeadbacks, good) => {
          return Math.round((good / totalFeadbacks) * 100);
      }

  const positivePersentage =
    totalFeadbacks > 0
        ? countPositiveFeedbackPercentage(
          totalFeadbacks,
            good
          )
        : 0;

        

return (
        <div>
            <Section title="Please leave feadback">
            <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleIncrement}/>
            </Section>
            <Section title="Statistics">
              {totalFeadbacks !==0 ?
              (<Statistics options={['good', 'neutral', 'bad']} stats={{good, neutral, bad}} totalFeadbacks={totalFeadbacks} positivePersentage={positivePersentage}/>
              )
              :
              <Option>No feadback given</Option>
            }
            </Section>
        </div>
      );
}

