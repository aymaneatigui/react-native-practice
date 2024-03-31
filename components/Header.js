import { View, Text, StyleSheet } from "react-native"

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Litle Lemon</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        // position: "absolute", 
        // top: 0,
        width: "100%",
        height: 80,
        paddingTop: 30,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        color: "black",
        fontSize: 35,
        fontWeight: "bold",
        paddingBottom: 10
        }   
})