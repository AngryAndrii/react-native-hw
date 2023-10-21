import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

const wallpaper = require("../images/photo-bg.png");

export default function RegistrationScreen() {
  return (
    // <View style={styles.container}>
    //   <ImageBackground source={BackgroundImage} />
    //   {/* <Text>Hello</Text>
    //   <TextInput placeholder="Type text" style={styles.input} /> */}
    // </View>
    <View style={styles.container}>
      <ImageBackground source={wallpaper} style={styles.backgroundImage}>
        <View style={styles.regContainer}>
          <View style={styles.avatarWrapper}></View>
          <Text style={styles.regText}>Реєстрація</Text>
          <TextInput style={styles.textInput} />
          <TextInput style={styles.textInput} />
          <TextInput style={styles.textInput} />
        </View>
      </ImageBackground>
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
  regContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingHorizontal: 16,
    height: 550,
    backgroundColor: "#fff",
    position: "relative",
  },
  avatarWrapper: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    top: -60,
    left: 128,
    borderRadius: 16,
  },
  regText: {
    textAlign: "center",
    fontSize: 30,
    color: "#212121",
    marginBottom: 32,
  },
  textInput: {
    height: 50,
    backgroundColor: "#f6f6f6",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 8,
    marginBottom: 16,
  },
});
