import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { JSX } from "react";

interface Props {
    label: string;
    onPress?: () => void;
}

const Button = (props: Props): JSX.Element => {
    const { label, onPress } = props;
    return (
        <TouchableOpacity onPress={ onPress } style={styles.button} >
            <Text style={styles.buttonLabel} >{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignSelf: "flex-start",
        backgroundColor: "#467FD3",
        borderRadius: 4,
        marginBottom: 24
    },
    buttonLabel: {
        color: "#FFF",
        fontSize: 16,
        lineHeight: 32,
        paddingVertical: 8,
        paddingHorizontal: 24,
    },
});

export default Button;
