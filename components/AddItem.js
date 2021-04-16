import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const AddItem = ({ addItem }) => {
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);

    return (
        <View>
            <TextInput
                placeholder="Add Item..."
                style={styles.input}
                onChangeText={onChange}
                value={text}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    addItem(text);
                    setText('');
                }}>
                <Text style={styles.btnText}>
                    <Ionicons
                    name="md-add"
                    size={32}
                    />
                    Add Item
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        height: 60,
        padding: 8,
        margin: 5,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 8,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    }
})

export default AddItem;