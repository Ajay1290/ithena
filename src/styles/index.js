import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {FontSize} from './typography';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const positions = {
  vcenter: {alignItems: 'center'},
  hcenter: {justifyContent: 'center'},
  center: {alignItems: 'center', justifyContent: 'center'},
};

const layout = {
  container: {display: 'flex'},
  containerCC: {display: 'flex', ...positions.center},
  containerVC: {display: 'flex', ...positions.vcenter},
  fullContainer: {flex: 1},
  row: {display: 'flex', flexDirection: 'row'},
  rowVC: {display: 'flex', flexDirection: 'row', ...positions.vcenter},
  rowCC: {display: 'flex', flexDirection: 'row', ...positions.center},
};

const inputs = (props) => ({
  input: {
    width: '100%',
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    ...texts(props).m
  }
});

const texts = props => {
  const common = {color: {...props.colors}.text};
  return {
    l: {...common, fontSize: FontSize.texts.l},
    m: {...common, fontSize: FontSize.texts.m},
    s: {...common, fontSize: FontSize.texts.s},
    xs: {...common, fontSize: FontSize.texts.xs},
  };
};

const featureTexts = props => ({
  l_b: {...texts(props).l},
  m_b: {...texts(props).m},
  s_b: {...texts(props).s},
  xs_b: {...texts(props).xs},
});

// Dynamic Sizing
const wp = w => widthPercentageToDP(w);
const hp = h => heightPercentageToDP(h);

const margins = {
  margin: (h, w) => ({marginVertical: hp(h), marginHorizontal: wp(w)}),
  mb: h => ({marginBottom: hp(h)}),
  mt: h => ({marginTop: hp(h)}),
  mv: h => ({marginVertical: hp(h)}),
  mh: h => ({marginHorizontal: wp(h)}),
  ml: h => ({marginLeft: wp(h)}),
  mr: h => ({marginRight: wp(h)}),
};

const paddings = {
  padding: (h, w) => ({paddingVertical: hp(h), paddingHorizontal: wp(w)}),
  pb: h => ({paddingBottom: hp(h)}),
  pt: h => ({paddingTop: hp(h)}),
  pv: h => ({paddingVertical: hp(h)}),
  ph: w => ({paddingHorizontal: wp(w)}),
  pl: w => ({paddingLeft: wp(w)}),
  pr: w => ({paddingRight: wp(w)}),
};

const functions = () => ({
  wp,
  hp,
  ...margins,
  ...paddings,
});

const base = props =>
  StyleSheet.create({
    ...layout,
    ...positions,
    ...texts(props),
    ...featureTexts(props),
    ...functions(),
    ...inputs(props)
  });

const getGlobalStyles = props =>
  StyleSheet.create({
    ...base(props),
  });

function useGlobalStyles() {
  const {colors} = useTheme();

  // We only want to recompute the stylesheet on changes in color.
  const styles = React.useMemo(() => getGlobalStyles({colors}), [colors]);

  return styles;
}

export default useGlobalStyles;
