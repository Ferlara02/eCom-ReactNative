import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

const TaskItem = ({ onHandlerDeleteTask, item }) => {
  return (
    <TouchableOpacity
      onPress={() => onHandlerDeleteTask(item)}
      style={item.completed ? styles.containerItemCompleted : styles.containerItem}>
      <Text style={styles.text}>{item.value}</Text>
      <Text style={styles.text}>{item.completed ? "✔" : "➢"}</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
