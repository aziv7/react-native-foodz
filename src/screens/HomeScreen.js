import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';

import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from 'react-native-heroicons/outline';

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
const HomeScreen = () => {
  const nav = useNavigation();

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text className=''></Text>

      {/*Header*/}
      <View className='flex-row pb-3 items-center mx-4 space-x-2 justify-between'>
        {/**uri https://links.papareact.com/wru https://i.pinimg.com/originals/79/64/83/796483ae19e58f77dafca3e5d4f3e06e.png */}

        <Image
          className='h7 w-7 bg-gray-300 p-4 rounded-full'
          source={{
            uri: 'https://i.pinimg.com/originals/79/64/83/796483ae19e58f77dafca3e5d4f3e06e.png',
          }}
        />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold  text-xl'>
            Current Location <ChevronDownIcon size={20} color='#00CCBB' />{' '}
          </Text>
        </View>
        <UserIcon size={35} color='#00CCBB' />
      </View>
      {/**Search */}
      <View className='flex-row items-center space-x-2 mx-4  pb-2'>
        <View className='flex-row items-center space-x-2 flex-1 bg-gray-200 p-3'>
          <SearchIcon color='gray' size={20} />
          <TextInput
            keyboardType='default'
            placeholder='Restaurants and cuisines'
          />
        </View>
        <AdjustmentsIcon color='#00CCBB' />
      </View>
      {/**Main section content */}
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
