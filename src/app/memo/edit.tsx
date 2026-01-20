import { View, TextInput, KeyboardAvoidingView, StyleSheet } from "react-native";
import { router } from "expo-router";
import { JSX } from "react";

import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";

const handlePress = (): void => {
    router.back();
}

const Edit = (): JSX.Element => {
    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <Header />
            <View style={styles.inputContainer}>
                <TextInput multiline style={styles.input} value={"買い物\nリスト1"} />
            </View>
            <CircleButton onPress={handlePress}>
                <Icon name="check" size={40} color="#FFF" />
            </CircleButton>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputContainer: {
        flex: 1,
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    input: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        textAlignVertical: "top"
    }
});

export default Edit;
