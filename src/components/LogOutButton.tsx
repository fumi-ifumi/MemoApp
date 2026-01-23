import { Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { router } from "expo-router";
import { JSX } from "react";

import { auth } from "../config";
import { signOut } from "firebase/auth";

const handlePress =(): void => {
    signOut(auth)
        .then(() => {
            router.replace("auth/log_in");
        })
        .catch(() => {
            Alert.alert("ログアウトに失敗しました");
        });
}

const LogOutButton = (): JSX.Element => {
    return (
        <TouchableOpacity onPress={handlePress}>
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
