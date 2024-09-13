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
          placeholderTextColor="#ffffff4d"
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
    backgroundColor: '#04151F',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: '#EFD6AC',
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
    color: '#EFD6AC',
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    borderRadius: 60,
    backgroundColor: '#04151F',
    borderColor: '#183A37',
    borderWidth: 1,
    fontFamily: 'Poppins-Regular'
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#183A37',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#04151F'
  },
  addText:{
    color: '#EFD6AC',
    fontFamily: 'Poppins-Regular'
  },
});
