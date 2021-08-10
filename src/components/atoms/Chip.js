import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import {Chip as RNPChip, useTheme} from 'react-native-paper';
import useGlobalStyles from '../../styles';

export function Chip({chipKey, name, onPress = () => {}, sel}) {
  const s = useGlobalStyles();
  const t = useTheme();

  const onPressed = () => {
    onPress();
  };

  return (
    <RNPChip
      style={{
        backgroundColor: sel ? t.colors.primary : t.colors.primaryDisabled,
        borderRadius: 10,
        marginEnd: 10,
      }}
      textStyle={{
        color: sel ? '#F3F3F3' : '#F9F9F9',
      }}
      selectedColor={sel ? t.colors.primary : t.colors.text}
      onPress={onPressed}>
      {name}
    </RNPChip>
  );
}

export function ChipGroup({children}) {
  const [selected, setSelected] = useState(0);
  const s = useGlobalStyles();
  const onPress = (i, onPressedA) => {
    setSelected(i);
    onPressedA();
  };

  return (
    <ScrollView
      nestedScrollEnabled
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{ ...s.mv('1%'), ...s.ph('2%'), minHeight: 30 }}>
      {children.map((c, i) => (
        <Chip
          key={i}
          name={c.props.name}
          sel={i === selected}
          onPress={() => onPress(i, c.props.onPress)}
        />
      ))}
    </ScrollView>
  );
}
