import React, { useEffect, useState } from "react";
import { TodoListScreen } from "./src/screens";
import { useFonts } from "expo-font";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import { Image, Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "./src/constants";

preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "I-Bold": require("./src/assets/fonts/Inconsolata-Bold.ttf"),
    "I-Regular": require("./src/assets/fonts/Inconsolata-Regular.ttf"),
    "I-Light": require("./src/assets/fonts/Inconsolata-Light.ttf"),
  });
  const [access, setAccess] = useState(false);
  const [size, setSize] = useState(1);

  useEffect(() => {
    if (fontsLoaded) {
      hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    console.log("SIGUE CORRIENDO")
    let interval = null;
    if (!access) {
      interval = setInterval(() => {
        size < 120 ? setSize(size + 1) : setAccess(true);
      }, 100);
    } else if (access && size !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [!access, size]);

  const borderRightRadious = size * 3 < 320 ? 0 : "100%";

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {access ? (
          <TodoListScreen />
        ) : (
          <View>
            <Text style={{ textAlign: "center", marginBottom: 20 }}>
              Se va calentando la compu
            </Text>
            <Pressable onPress={() => setAccess(!access)}>
              <View
                style={{
                  borderTopLeftRadius: "100%",
                  borderBottomLeftRadius: "100%",
                  borderBottomRightRadius: borderRightRadious,
                  borderTopRightRadius: borderRightRadious,
                  height: 30,
                  width: size * 3,
                  backgroundColor: COLORS.warnings.second,
                  alignSelf: "start",
                  marginLeft: "5%",
                }}
              ></View>
            </Pressable>
          </View>
        )}
      </View>
    </>
  );
}
