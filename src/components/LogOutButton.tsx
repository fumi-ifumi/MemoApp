import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { JSX } from "react";

const LogOutButton = (): JSX.Element => {
    return (
        <TouchableOpacity>
            <Text style={styles.text}>ログアウト</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "#FFF",
        opacity: 0.7,
        fontSize: 12,
        lineHeight: 24
    }
});

export default LogOutButton;
