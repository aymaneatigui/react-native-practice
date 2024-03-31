import { View, Text, StyleSheet } from "react-native";

export default function CopyRight() {
    return (
        <View style={styles.header}>
            <Text style={styles.copyRightText}>All rights reserved by Litle Lemon 2022</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        // position: "absolute", 
        // top: 0,
        width: "100%",
        height: 30,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    copyRightText: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        }   
})