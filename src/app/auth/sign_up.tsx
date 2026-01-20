import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import { JSX } from "react";

import Button from "../../components/Button";

const handlePress = (): void => {
    //会員登録処理
    router.push("memo/list");
};

const SignUp = (): JSX.Element => {
    return (
        <View style={styles.container} >
            <View style={styles.inner}>
                <Text style={styles.title} >Sign Up</Text>
                <TextInput value="Email address" style={styles.input} />
                <TextInput value="Password" style={styles.input} />
                <Button label="Submit" onPress={handlePress}/>
                <View style={styles.footer}>
                    <Text style={styles.footerText} >Already registerd?</Text>
                    <Link href="/auth/log_in" asChild >
                        <TouchableOpacity>
                            <Text style={styles.footerLink} >Log in.</Text>
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
        color: "#DDD",
        fontSize: 16,
        height: 48,
        padding: 8,
        marginBottom: 16
    },
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

export default SignUp;
