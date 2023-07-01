import { useState } from "react";
import {
  View,
  SafeAreaView,
  FlatList
} from "react-native";

import { InputTask, ItemDetail, TaskItem } from "./components/index.js";
import { styles } from "./styles.js";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [task, setTask] = useState("");
  const [selectedTask, setSelectedTask] = useState({});

  const onHandlerChangeText = (text) => {
    setTask(text);
  };

  const [tasks, setTasks] = useState([]);

  const onHandlerCreateTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task,
        completed: false,
      },
    ]);
    setTask("");
  };

  const [borderColor, setBorderColor] = useState("#C5C9E7");

  const onHandlerFocus = () => {
    setBorderColor("#424D9E");
  };
  const onHandlerBlur = () => {
    setBorderColor("#C5C9E7");
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRender}>
      <TaskItem item={item} onHandlerDeleteTask={onHandlerDeleteTask} />
    </View>
  );

  const onHandlerDeleteTask = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  };

  const onHandlerComplete = (id) => {
    const task = tasks.find((task) => task.id === id);
    task.completed = true;
    setIsVisible(false);
  };

  const onHandlerDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setIsVisible(false);
  };
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <InputTask
          borderColor={borderColor}
          onHandlerBlur={onHandlerBlur}
          onHandlerChangeText={onHandlerChangeText}
          onHandlerCreateTask={onHandlerCreateTask}
          onHandlerFocus={onHandlerFocus}
          task={task}
        />
        <View style={styles.tasksContainer}>
          <FlatList
            data={tasks}
            renderItem={renderItem}
            style={styles.list}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <ItemDetail
        isVisible={isVisible}
        onHandlerDelete={onHandlerDelete}
        selectedTask={selectedTask}
        setIsVisible={setIsVisible}
        onHandlerComplete={onHandlerComplete}
      />
    </SafeAreaView>
  );
}
