import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity,} from "react-native";

interface ButtonProps {
  title: string;
}

function Button (props: ButtonProps){
  return (
    <TouchableOpacity>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Daniel Bumbum Guloso" />
      <Button title="Sor Gostigui" />
      <Button title="VGaymer" />
      <Button title="Henrique Gado" />
      <StatusBar style="auto" />
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
});
