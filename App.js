import { View, Text, StyleSheet } from "react-native"
import Header from "./components/Header.js"
import CopyRight from "./components/CopyRight.js"

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CopyRight/>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "green"
  }
})
