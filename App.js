import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Platform, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,  1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>

        <Text style={styles.sectionTitle}>All Tasks</Text>
        {/* <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 24, fontWeight: 'bold', color: '#EFD6AC' }}>
            All Tasks
        </Text>  */}
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task  text={item} />
                </TouchableOpacity>
              ) 
            })
          }
        </View>
        
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={styles.writeTaskWrapper}
      >

        <TextInput style={styles.input} placeholder={'Enter a task'} placeholderTextColor="#ffffff4d" value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
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
    // marginTop: 15,        
    // marginBottom: 30     
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