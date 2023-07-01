import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerItem: {
    margin: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#A6A2A2",
    borderRadius: 10,
    //sombra en iOs
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    //sombra en android
    elevation: 4,
  },
  containerItemCompleted: {
    margin: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "green",
    borderRadius: 10,
    //sombra en iOs
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    //sombra en android
    elevation: 4,
  },
  text: {
    marginHorizontal: 10,
    color: "#FBFBF2",
  },
});
