import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const Label = ({ iconName, iconSize, label }) => {
    // console.log(iconName)
    return (
        <View style={styles.label}>
            <Ionicons icon name={iconName} size={iconSize}></Ionicons>
            <Text style={styles.textLabel}>{label}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    label: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        textAlign: "left",
        fontSize: 14,
        marginLeft: 10,
    },
    textLabel: {
        fontSize: 14,
    },
})

export default Label;