import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const smallestWidth = 350;
const smallestHeight = 680;

const scale = size => (width / smallestWidth) * size;
const vScale = size => (height / smallestHeight) * size;
const hScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const FontSize = {
  leads: {
    l1: scale(72),
    l2: scale(64),
    l3: scale(58),
    l4: scale(44),
    l5: scale(38),
  },
  headings: {
    h1: scale(32),
    h2: scale(28),
    h3: scale(24),
    h4: scale(22),
    h5: scale(20),
    h6: scale(18),
  },
  texts: {
    l: scale(16),
    m: scale(14),
    s: scale(11),
    xs: scale(10),
    btn: scale(14),
  },
};

export {scale, vScale, hScale, FontSize};
