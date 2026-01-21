import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import { JSX, useState } from "react";

import { auth } from "../../config";
import { signInWithEmailAndPassword } from "firebase/auth";

import Button from "../../components/Button";

const handlePress = (email: string, password: string): void => {
    //ログイン
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user.uid);
            //ログイン処理
            router.replace("memo/list");
        })
        .catch((error) => {
            const { code, message } = error;
            Alert.alert(message);
        });
};

const LogIn = (): JSX.Element => {
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    return (
        <View style={styles.container} >
            <View style={styles.inner}>
                <Text style={styles.title} >Log In</Text>
                <TextInput
                    value={email}
                    onChangeText={(text) => { setEmail(text) }}
                    placeholder="Email Address"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style={styles.input}
                />
                <TextInput
                    value={Password}
                    onChangeText={(text) => { setPassword(text) }}
                    placeholder="Password"
                    textContentType="password"
                    autoCapitalize="none"
                    secureTextEntry
                    style={styles.input}
                />
                <Button label="Submit" onPress={() => handlePress(email, Password)} />
                <View style={styles.footer}>
                    <Text style={styles.footerText} >Not registerd?</Text>
                    <Link href="/auth/sign_up" replace asChild >
                        <TouchableOpacity>
                            <Text style={styles.footerLink} >Sign up here!</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F4F8"
    },
    inner: {
        paddingVertical: 24,
        paddingHorizontal: 27
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 32,
        marginBottom: 24
    },
    input: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        // color: "#DDD",
        fontSize: 16,
        height: 48,
        padding: 8,
        marginBottom: 16
    },
    footer: {
        flexDirection: "row"
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: "#000"
    },
    footerLink: {
        color: "#467FD3",
        fontSize: 14,
        lineHeight: 24
    }
});

export default LogIn;
