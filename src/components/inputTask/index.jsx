import { View, TextInput, Button } from "react-native";

import { styles } from "./styles.js";

const InputTask = ({
  borderColor,
  onHandlerFocus,
  onHandlerBlur,
  onHandlerChangeText,
  task,
  onHandlerCreateTask,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { borderColor }]}
        placeholder="Add new tasks"
        autoCapitalize="none"
        autoCorrect={false}
        cursorColor="#847577"
        placeholderTextColor="#847577"
        onFocus={onHandlerFocus}
        onBlur={onHandlerBlur}
        onChangeText={onHandlerChangeText}
        value={task}
      />

      <Button
        disabled={task.length === 0}
        title="Create"
        color="#847577"
        onPress={onHandlerCreateTask}
      />
    </View>
  );
};

export default InputTask