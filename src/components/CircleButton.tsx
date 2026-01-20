import { Text, TouchableOpacity, StyleSheet, type ViewStyle } from "react-native";
import { JSX } from "react";

interface Props {
    children: JSX.Element;
    style?: ViewStyle;
    onPress?: () => void;
}

const CircleButton = (props: Props): JSX.Element => {
    const { children, style, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} style={[styles.circleButton, style]}>
            <Text style={styles.circleButtonLabel}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    circleButton: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#467FD3",
        width: 64,
        height: 64,
        borderRadius: 32,
        right: 40,
        bottom: 40,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 8},
        shadowRadius: 8
    },
    circleButtonLabel: {
        color: "#FFF",
        fontSize: 40,
        lineHeight: 40
    }
});

export default CircleButton;
