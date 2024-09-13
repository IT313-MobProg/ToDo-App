import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; // Importing icons from react-native-vector-icons

const Task = ({ text, onEdit, onDelete }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onEdit}>
          <AntDesign name="edit" size={18} color="#EFD6AC" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <AntDesign name="delete" size={18} color="#EFD6AC" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    maxWidth: '90%',
    color: '#EFD6AC',
    fontFamily: 'Poppins-Regular'
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  deleteButton: {
    marginLeft: 15
  }
});

export default Task;
