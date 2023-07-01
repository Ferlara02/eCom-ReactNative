import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center"
  },
  modalDetail: {
    paddingVertical: 20,
  },
  modalDetailText: {
    padding: 10,
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 0.5
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%"
  },
});
