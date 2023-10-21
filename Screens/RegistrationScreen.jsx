import { ImageBackground, TextInput } from "react-native";
// import BackgroundImage from "../images/photo-bg.png";
import { StyleSheet, Text, View } from "react-native";

const wallpaper = require("../images/photo-bg.png");

export default function RegistrationScreen() {
  return (
    // <View style={styles.container}>
    //   <ImageBackground source={BackgroundImage} />
    //   {/* <Text>Hello</Text>
    //   <TextInput placeholder="Type text" style={styles.input} /> */}
    // </View>
    <View style={styles.container}>
      <ImageBackground source={wallpaper} style={styles.backgroundImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
});
