import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import useGlobalStyles from '../styles';
import Position from '../assets/SVG/position.svg';

export default function CartScreen() {
  const s = useGlobalStyles();
  const t = useTheme();
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        ...s.containerCC,
        flexGrow: 1,
        ...s.mv('2%'),
      }}>
      <View style={{width: '80%', ...s.center}}>
        <Text style={{...s.mv('2%'), ...s.l}}>Confirmation</Text>
        <View style={{...s.mv('5%')}}>
          <Position height="250" />
        </View>
        <Text
          style={{...s.l, fontSize: 28, textAlign: 'center', ...s.mv('2%')}}>
          Relax and Shop
        </Text>
        <Text style={{...s.m, textAlign: 'center'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa
        </Text>
      </View>
      <View
        style={{
          ...s.margin('2%', '2%'),
          flex: 1,
          justifyContent: 'flex-end',
          width: '80%',
        }}>
        <Button
          style={{...s.buttonStyle, width: '100%', padding: 5}}
          uppercase={false}
          mode="contained"
          theme={t}>
          Payment
        </Button>
      </View>
    </ScrollView>
  );
}
