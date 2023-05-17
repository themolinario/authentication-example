import {Alert, StyleSheet, Text, TextInput, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {useState} from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

interface StartGameScreenProps {
    onPickNumber: (arg: number) => void
}

function StartGameScreen ({onPickNumber}: StartGameScreenProps) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText: string) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler () {
        setEnteredNumber('')
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'E scrivilo bene il numero',
                'Tra 1 e 99 please',
                [{ text: 'Vabbuon', style: 'destructive', onPress: resetInputHandler}]
                );
            return;
        }

        onPickNumber(chosenNumber);
    }

 return(
     <View style={styles.rootContainer}>
         <Title> Indovina il mio numero </Title>
         <Card>
             <InstructionText>
                 Metti un numero
             </InstructionText>
             <TextInput
                 style={styles.numberInput}
                 maxLength={2}
                 keyboardType="numbers-and-punctuation"
                 autoCapitalize="none"
                 autoCorrect={false}
                 onChangeText={numberInputHandler}
                 value={enteredNumber}
             />
             <View style={styles.buttonsContainer}>
                 <View style={styles.buttonContainer}>
                     <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                 </View>
                 <View style={styles.buttonContainer}>
                     <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                 </View>
             </View>
         </Card>
     </View>
 )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },

})