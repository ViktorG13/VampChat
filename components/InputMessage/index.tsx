import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function InputMessage() {
  return (
    <View style={styles.container}>
        <TextInput 
            style={styles.input}
            placeholder='Escreva sua mensagem aqui...'
            autoFocus={true}
            autoCorrect={true}
        />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 40,
        maxHeight: 45,
        borderTopWidth: 1,
        alignItems: "center",
        paddingTop: 5,
        flexDirection: "row",
        borderTopColor: "#aaaaaaaa",
        justifyContent: "space-evenly",
    },
    input: {
        padding: 5,
        fontSize: 23,
        width: "80%",
        height: "90%",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#aaaaaaaa",
        textAlignVertical: "center",
    },
    button: {
        flex: 1,
        height: "90%",
        borderRadius: 5,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#A000F5FF",
    },
    buttonText: {
        fontSize: 20,
        marginTop: "5%",
        color: "#FFFFFFFF",
    },
});
