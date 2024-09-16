import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Task = ({ text, onEdit, onDelete, onToggleComplete, completed }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onToggleComplete} style={styles.itemLeft}>
        <View style={[styles.square, completed && styles.squareCompleted]}>
          {completed && <AntDesign name="check" size={16} color="#d6d6d6" />}
        </View>
        <Text style={[styles.itemText, completed && styles.itemTextCompleted]}>{text}</Text>
      </TouchableOpacity>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onEdit} style={styles.editButton}>
          <AntDesign name="edit" size={24} color="#d6d6d6" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <AntDesign name="delete" size={24} color="#d6d6d6" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#795757', //less darker //#183A37 //#
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
    backgroundColor: '#3B3030', //mura siyag beige //#EFD6AC //#3B3030
    opacity: 0.7,
    borderRadius: 5,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareCompleted: {
    width: 24,
    height: 24,
    backgroundColor: '#3B3030', //katong gray //#5c5c5c //#
    borderColor: '#3B3030',
    borderWidth: 1
  },
  itemText: {
    maxWidth: '80%',
    color: '#FFFFFF', //mura siyag beige //#EFD6AC //#FFF0D1
    opacity: 0.87,
    fontFamily: 'Poppins-Regular'
  },
  itemTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#a5a5a5' //lighter gray pag completed nang task //#a5a5a5 //#
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
