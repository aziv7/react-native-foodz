import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Category from './Category';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}>
      <Category img='https://links.papareact.com/gn7' title='cat' />
      <Category img='https://links.papareact.com/gn7' title='cat' />
      <Category img='https://links.papareact.com/gn7' title='cat' />
      <Category img='https://links.papareact.com/gn7' title='cat' />
      <Category img='https://links.papareact.com/gn7' title='cat' />
      <Category img='https://links.papareact.com/gn7' title='cat' />
      <Category img='https://links.papareact.com/gn7' title='cat' />
      <Category img='https://links.papareact.com/gn7' title='cat' />
    </ScrollView>
  );
};

export default Categories;
