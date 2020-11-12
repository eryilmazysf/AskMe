import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

import {finishPage} from './styles';

import {useSelector} from 'react-redux';

const Finish = (props) => {
  const userScore = useSelector((global) => global.score);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={finishPage.container}>
        <Text style={finishPage.text}>Your score is {userScore}</Text>
        <TouchableOpacity
          style={{
            flex: 0.2,
            backgroundColor: '#ef6c00',
            justifyContent: 'center',
            borderRadius: 20,
            margin: 20,
          }}
          onPress={() => props.navigation.navigate('Intro')}>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'white',
            }}>
            Start Again
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export {Finish};
