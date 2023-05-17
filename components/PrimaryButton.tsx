import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import Colors from "../constants/colors";

type ButtonProps = {
    children: string | JSX.Element | JSX.Element[];
    onPress: () => void;
};
function PrimaryButton ({children, onPress}:  ButtonProps) {
    function pressHandler() {
        console.log('Pressed');
    }

    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) => pressed ? [styles.container, styles.pressed] : styles.container}
                onPress={onPress}
                android_ripple={{color: Colors.primary600}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary500,
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4
    },
    buttonText: {
        color: 'white',
        textAlign: "center",
        fontFamily: 'open-sans'
    },
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    pressed: {
        opacity: 0.75
    }

})