import { View, Text, StyleSheet } from "react-native";

const CircleButton = (): JSX.Element => {
    return (
        <View style={styles.circleButton}>
            <Text style={styles.circleButtonLabel}>+</Text>
        </View>
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
