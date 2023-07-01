import { Modal, View, Text, Button } from "react-native";

import { styles } from "./styles";

const ItemDetail = ({ isVisible, selectedTask, setIsVisible, onHandlerDelete, onHandlerComplete }) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}> Task detail</Text>
        <View style={styles.modalDetail}>
          <Text style={styles.modalDetailText}>{selectedTask?.value}</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <Button title="Cancel" color="red" onPress={() => setIsVisible(false)} />
          <Button
            title="Completed"
            disabled={(selectedTask?.completed)}
            color="green"
            onPress={() => onHandlerComplete(selectedTask?.id)}
          />
          <Button title="Delete" onPress={() => onHandlerDelete(selectedTask?.id)} />
        </View>
      </View>
    </Modal>
  );
};

export default ItemDetail;
