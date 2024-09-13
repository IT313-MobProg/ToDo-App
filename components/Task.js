import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#183A37',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#EFD6AC',
        opacity: 0.7,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: '80%',
        color: '#EFD6AC',
        fontFamily: 'Poppins-Regular'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#EFD6AC',
        borderWidth: 2,
        borderRadius: 5
    },
});

export default Task;