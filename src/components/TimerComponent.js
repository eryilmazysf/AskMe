import React from 'react';
import {View, Animated} from 'react-native';
import Modal from 'react-native-modal';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const TimerComponent = (props) => {
  return (
    <View
      style={{
        backgroundColor: '#3949ab',
        alignItems: 'center',
        padding: 20,
      }}>
      <CountdownCircleTimer
        key={props.x}
        isPlaying={props.counterFlag}
        duration={5}
        onComplete={() => props.onTimerCompleted()}
        colors={[
          ['#fff176', 0.4],
          ['#ba68c8', 0.4],
          ['#ff8a65', 0.2],
        ]}>
        {({remainingTime, animatedColor}) => (
          <Animated.Text
            style={{
              fontFamily: 'Pacifico-Regular',
              fontSize: 80,
              color: animatedColor,
            }}>
            {remainingTime}
          </Animated.Text>
        )}
      </CountdownCircleTimer>
    </View>
  );
};

export {TimerComponent};
