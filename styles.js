import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#119afb",
  },

  viewAction: {
    flex: 1,
    height: 40,
    alignItems: "center",
    backgroundColor: "#119afb",
  },

  image: {
    aspectRatio: 5,
    height: 150,
    resizeMode: "contain",
  },

  titletext: {
    fontFamily: "Quicksand",
    color: "#FFFFFF",
    fontSize: "30",
    fontWeight: "bold",
  },

  basetext: {
    fontFamily: "Montserrat",
    color: "#FFFFFF",
    fontSize: "11",
  },

  actionTitle: {
    marginTop: 40,
    fontFamily: "Montserrat",
    color: "#FFFFFF",
    fontSize: "20",
  },

  actionText: {
    fontFamily: "Montserrat",
    color: "#FFFFFF",
    fontSize: "20",
    textAlign: "auto",
  },

  separator: {
    marginVertical: 8,
  },
});

export default styles;
