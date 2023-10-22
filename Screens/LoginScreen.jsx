import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const wallpaper = require("../assets/images/photo-bg.png");
const addPhotoIcon = require("../assets/images/add.png");

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={wallpaper} style={styles.backgroundImage}>
        <View style={styles.regContainer}>
          <Text style={styles.regText}>Увійти</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Адреса електронної пошти"
          />
          <View style={{ position: "relative" }}>
            <TextInput style={styles.textInput} placeholder="Пароль" />
            <Text style={{ position: "absolute", top: 15, right: 15 }}>
              Показати
            </Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Зареєстуватися</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>Немає акаунту? Зареєструватися</Text>
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
    paddingTop: 32,
    paddingHorizontal: 16,
    height: 500,
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
  addButton: {
    position: "absolute",
    width: 25,
    height: 25,
    right: -13,
    bottom: 20,
  },
  regText: {
    textAlign: "center",
    fontSize: 30,
    color: "#212121",
    marginBottom: 32,
    fontWeight: "500",
  },
  textInput: {
    height: 50,
    backgroundColor: "#f6f6f6",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 8,
    marginBottom: 16,
    padding: 15,
    color: "#bdbdbd",
    fontSize: 15,
    fontWeight: "normal",
    fontWeight: "400",
  },
  button: {
    borderRadius: 100,
    height: 50,
    marginTop: 23,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
    color: "#1B4371",
  },
});
