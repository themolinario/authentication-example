import {StyleSheet, Text} from "react-native";
import React from "react";
import Colors from "../constants/colors";

interface TitleProps {
    children: string
}
function Title ({children}: TitleProps) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: 'white',
        textAlign: "center",
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        borderRadius: 8,
        fontFamily: 'open-sans-bold'
    }
})