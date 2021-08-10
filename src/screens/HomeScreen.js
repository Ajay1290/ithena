import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import useGlobalStyles from '../styles';
import FIcon from 'react-native-vector-icons/Feather';
import AIcon from 'react-native-vector-icons/Ionicons';
import {FAB, TextInput, useTheme} from 'react-native-paper';
import {Chip, ChipGroup} from '../components/atoms/Chip';
import data from '../data';
import {useState} from 'react';
import {useEffect} from 'react';
import db from '../db';

export default function HomeScreen() {
  const s = useGlobalStyles();
  const t = useTheme();

  const [search, setsearch] = useState('');
  const [dataList, setdataList] = useState([]);
  const [tagsList, settagsList] = useState([]);

  const [loading, setloading] = useState(true);

  const filterByTag = tag => {
    setdataList(
      data.data.filter((value, i, self) => tag == value.product_category_name),
    );
    setsearch('');
  };

  const filterBySearch = text => {
    setsearch(text);
    text = text.toLowerCase();
    let filteredName = data.data.filter(item => {
      return item.product_name.toLowerCase().includes(text);
    });
    setdataList(filteredName);
  };

  useEffect(() => {
    setdataList(data.data);
    let tags = data.data.filter(
      (value, i, self) =>
        i ===
        self.findIndex(
          t => t.product_category_name === value.product_category_name,
        ),
    );
    tags.push('ALL');
    tags = tags.reverse();
    settagsList(tags);
    setloading(false);
  }, []);

  const ProductCard = ({data}) => (
    <View
      style={{
        flex: 1,
        ...s.margin('1%', '2%'),
        ...s.padding('1%', '2%'),
        backgroundColor: '#44444488',
        borderRadius: 8,
      }}>
      <Image
        style={{height: 130, width: '100%', borderRadius: 10}}
        resizeMode="stretch"
        source={{
          uri: data.product_image,
        }}
      />
      <Text style={{...s.m, ...s.mt('1%')}}>{data.product_name}</Text>
      <Text style={{...s.s, color: t.colors.placeholder}}>
        {data.product_size}
      </Text>
      <View style={{...s.rowVC, justifyContent: 'space-between', marginTop: 5}}>
        <Text style={s.m}>{data.price}</Text>
        <Text
          style={{
            ...s.s,
            fontSize: 12,
            backgroundColor: t.colors.primary,
            paddingHorizontal: 5,
            paddingVertical: 1,
            borderRadius: 20,
          }}>
          +
        </Text>
      </View>
    </View>
  );

  const TopBar = () => (
    <View style={{...s.rowVC, ...s.ph('2%')}}>
      <FIcon name="user" size={s.wp('8%')} color={t.colors.placeholder} />
      <TextInput
        mode="outlined"
        style={{
          flex: 1,
          marginHorizontal: s.wp('2%'),
          marginVertical: s.hp('0.5%'),
          ...s.input,
          height: 45,
        }}
        theme={{...t, roundness: 10}}
        value={search}
        onChangeText={filterBySearch}
        placeholder="Search..."
        right={
          <TextInput.Icon
            style={s.mt('1.5%')}
            name={() => (
              <FIcon name="search" color={t.colors.placeholder} size={25} />
            )}
          />
        }
      />
      <AIcon
        name="location-outline"
        size={s.wp('8%')}
        color={t.colors.placeholder}
      />
    </View>
  );

  return (
    <SafeAreaView>
      <View>
        {TopBar()}
        <ChipGroup>
          {tagsList.map((d, i) => (
            <Chip
              key={`dsa${i}`}
              name={i == 0 ? 'ALL' : d.product_category_name}
              onPress={() =>
                i == 0
                  ? setdataList(data.data)
                  : filterByTag(d.product_category_name)
              }
            />
          ))}
        </ChipGroup>
        {loading ? (
          <ActivityIndicator size="large" color={t.colors.primary} />
        ) : (
          <FlatList
            columnWrapperStyle={{justifyContent: 'space-between'}}
            numColumns={2}
            style={{...s.mb('14%')}}
            data={dataList}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({item}) => <ProductCard data={item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
