import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

export default function App() {
  const [items, setItems] = useState([
    {id: '1', text: "milk"},
    {id: '2', text: "eggs"},
    {id: '3', text: "bread"},
    {id: '4', text: "juice"}
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    })
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List"/>
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