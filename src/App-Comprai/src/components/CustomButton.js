import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomButton({title, onPress, icon, color}) {

    return (
        <TouchableOpacity style={styles.button} onPress={onPress} >
            <Ionicons name={icon} size={24} color="#FFF" />
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#224261',
        height: 52,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        paddingHorizontal: 30
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
});