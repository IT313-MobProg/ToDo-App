import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Task = ({ text, onEdit, onDelete, onToggleComplete, completed }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onToggleComplete} style={styles.itemLeft}>
        <View style={[styles.square, completed && styles.squareCompleted]}>
          {completed && <AntDesign name="check" size={16} color="#EFD6AC" />}
        </View>
        <Text style={[styles.itemText, completed && styles.itemTextCompleted]}>{text}</Text>
      </TouchableOpacity>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onEdit} style={styles.editButton}>
          <AntDesign name="edit" size={24} color="#EFD6AC" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <AntDesign name="delete" size={24} color="#EFD6AC" />
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
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareCompleted: {
    backgroundColor: '#5c5c5c',
  },
  itemText: {
    maxWidth: '80%',
    color: '#EFD6AC',
    fontFamily: 'Poppins-Regular'
  },
  itemTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#a5a5a5'
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  editButton: {
    marginRight: 15
  },
  deleteButton: {
    marginLeft: 15
  }
});

export default Task;
