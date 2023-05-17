import {Image, StyleSheet, Text, View} from "react-native";
import Card from "../components/Card";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

interface GameOverScreenProps {
    roundsNumber: number,
    userNumber: number,
    onStartNewGame: () => void
}

function GameOverScreen ({roundsNumber, userNumber, onStartNewGame}: GameOverScreenProps) {
    return (
        <View style={styles.container}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.summaryText}>
                Ci hai provato <Text style={styles.highlight}>{roundsNumber}</Text> volte per indovinare il numero <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Restart</PrimaryButton>
        </View>

    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        borderRadius: 1500,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',

    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
});