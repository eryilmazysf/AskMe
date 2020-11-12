import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {introPage} from './styles';
import axios from 'axios';
import {CategorySelectModal, TimerComponent} from '../components';
// import {MyComponent} from 'my-test-component-ezran';

const Intro = (props) => {
  const [timerFlag, setTimerFlag] = useState(false);
  const [counterFlag, setCounterFlag] = useState(false);
  const [modalFlag, setModalFlag] = useState(false);
  const [key, setKey] = useState(0);
  const dispatch = useDispatch();

  const startGame = (selectedCategory) => {
    // axios.get(`https://opentdb.com/api.php?amount=10&category=${selectedCategory.id}&type=boolean`)
    axios
      .get(`https://opentdb.com/api.php?`, {
        params: {
          amount: 10,
          category: selectedCategory.id,
          type: 'boolean',
          encode: 'base64',
        },
      })
      .then((response) => {
        const {
          data: {results: questions},
        } = response;

        dispatch({type: 'SET_QUESTIONS', payload: {questions}});
      });

    setModalFlag(false);
    setTimerFlag(true);
    setCounterFlag(true);
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        {/* <MyComponent title="ClarusWay!" /> */}
        <View style={introPage.container}>
          <Text style={introPage.bannerText}>Tırı Vırı!</Text>
        </View>
        <TimerComponent
          key={key}
          counterFlag={counterFlag}
          onTimerCompleted={() => {
            props.navigation.navigate('Questions');
          }}
        />

        <View style={introPage.container}>
          <TouchableOpacity
            style={introPage.buttonContainer}
            onPress={() => {
              setModalFlag(true);
            }}>
            <Text style={introPage.buttonText}>Start!</Text>
          </TouchableOpacity>
        </View>

        <CategorySelectModal
          visibility={modalFlag}
          onClose={() => setModalFlag(false)}
          onCategorySelect={startGame}
        />
      </View>
    </SafeAreaView>
  );
};

export {Intro};
