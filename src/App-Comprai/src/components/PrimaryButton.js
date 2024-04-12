import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PrimaryButton({title, onPress}) {

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#224261',
        width: '90%',
        height: 52,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
});