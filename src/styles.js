// eslint-disable-next-line prettier/prettier
import { StyleSheet, StatusBar } from "react-native";
export const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#FBFBF2",
    paddinHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
  tasksContainer: {
    flex: 1,
    marginTop: 25,
    marginHorizontal: 10,
    gap: 20,
  },

  list: {
    paddingBottom: 12,
  },
});
