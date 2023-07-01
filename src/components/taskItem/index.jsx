import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

const TaskItem = ({ onHandlerDeleteTask, item }) => {
  return (
    <TouchableOpacity
      onPress={() => onHandlerDeleteTask(item)}
      style={item.completed ? styles.containerItemCompleted : styles.containerItem}>
      <Text style={styles.text}>{item.value}</Text>
      {item.completed ? <Text style={styles.text}>✔</Text> : null}
    </TouchableOpacity>
  );
};

export default TaskItem;
