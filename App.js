import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Platform, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf')
  });

  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState('');

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (isEditing && editIndex !== null) {
      let itemsCopy = [...taskItems];
      itemsCopy[editIndex] = { text: editTask, completed: false };
      setTaskItems(itemsCopy);
      setIsEditing(false);
      setEditIndex(null);
      setEditTask('');
    } else if (task) {
      setTaskItems([...taskItems, { text: task, completed: false }]);
      setTask('');
    }
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy[index].completed = !itemsCopy[index].completed;
    setTaskItems(itemsCopy);
  };

  const startEditing = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setEditTask(taskItems[index].text);
  };

  const handleEdit = (index) => {
    startEditing(index);
  };

  const handleDelete = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>All Tasks</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => (
            <Task 
              key={index} 
              text={item.text} 
              completed={item.completed}
              onToggleComplete={() => completeTask(index)} 
              onEdit={() => handleEdit(index)} 
              onDelete={() => handleDelete(index)} 
            />
          ))}
        </View>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={'Enter a task'}
          placeholderTextColor="#3B3030" //#ffffff4d //#3B3030
          value={isEditing ? editTask : task}
          onChangeText={text => isEditing ? setEditTask(text) : setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>{isEditing ? 'Update' : '+'}</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0D1', //darkest //#04151F //#FFF0D1
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: '#3B3030', //mura siyag beige //#EFD6AC //#3B3030
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    color: '#3B3030', //mura siyag beige //#EFD6AC //#3B3030
    paddingVertical: 15, 
    paddingHorizontal: 15,
    width: 250,
    borderRadius: 60, 
    backgroundColor: '#FFF0D1', //darkest //#04151F //#FFF0D1
    borderColor: '#795757', //less darker //#183A37 //#795757
    borderWidth: 2,
    fontFamily: 'Poppins-Regular',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#795757', //less darker //#183A37 //#795757
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, 
    borderColor: '#FFF0D1' //darkest //#04151F //#FFF0D1
  },
  addText:{
    color: '#FFF0D1', //mura siyag beige //#EFD6AC //#FFF0D1
    fontFamily: 'Poppins-Regular'
  },
});
