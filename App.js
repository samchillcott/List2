import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

import Header from './components/Header';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';


export default function App() {
  const [items, setItems] = useState([
    {id: uuid(), text: "milk"},
    {id: uuid(), text: "eggs"},
    {id: uuid(), text: "bread"},
    {id: uuid(), text: "juice"}
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    })
  };

  const addItem = (text) => {
    console.log(text);
    setItems(prevItems => {
      return [{id: uuid(), text}, ...prevItems]
    })
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List"/>
      <AddItem addItem={addItem}/>
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem
          item={item}
          deleteItem={deleteItem} />}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
});