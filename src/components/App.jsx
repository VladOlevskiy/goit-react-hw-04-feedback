import React, { useState } from 'react';
import { Box } from './Box/Box';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistict';
import Section from './Section/Section ';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeatural] = useState(0);
  const [bad, setBad] = useState(0);

  const GetCountFeedback = option => {
    if (option === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (option === 'neutral') {
      setNeatural(prevState => prevState + 1);
    }
    if (option === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };
  let total = 0;
  const countTotalFeedback = () => {
    total = good + neutral + bad;

    return total;
  };

  countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    if (total >= 1) {
      return Math.round((good / total) * 100);
    }
  };

  const stateKeys = Object.keys({ good, neutral, bad });

  return (
    <Box
      paddingBottom="30px"
      display="flex"
      flexDirection="column"
      marginLeft="auto"
      marginRight="auto"
      alignItems="center"
      width="500px"
      boxShadow="0px 1px 7px rgb(0 0 0), 0px 1px 8px rgb(0 0 0 / 67%), 0px 2px 3px rgb(0 0 0 / 47%)"
      borderRadius="0px 0px 4px 4px"
      backgroundColor="#cbcbcb"
      marginBottom="80px"
    >
      <Section text="Please leave feedback">
        <FeedbackOptions
          FeedbackCountFunc={GetCountFeedback}
          stateKeys={stateKeys}
        />
      </Section>
      <Section text="Statistics">
        {total >= 1 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Box>
  );
};
