import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const AddItem = () => {
    return (
        <View>
            <TextInput
                placeholder="Add Item"
                style={styles.input}
            />
            <TouchableOpacity style={styles.btn}>
                <Text
                    style={styles.btnText}>
                    Add Item
                    <Ionicons
                    name="md-add"
                    size={32}
                    // onPress={() => deleteItem(item.id)}
                />
                </Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default AddItem;