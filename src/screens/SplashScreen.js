import React from 'react';
import {View, Text} from 'react-native';
import useGlobalStyles from '../styles';

export default function SplashScreen() {
  const s = useGlobalStyles();
  return (
    <View style={{...s.containerCC, flex: 1}}>
      <Text style={{...s.l}}>Ithena's Assignment</Text>
    </View>
  );
}
