import { View, TextInput, Alert, StyleSheet } from "react-native";
import { router } from "expo-router";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { JSX, useState } from "react";

import { db, auth } from "../../config";

import  KeyboardSafeView from "../../components/KeyboardSafeView";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";

const handlePress = (bodyText: string): void => {
    if (auth.currentUser === null) return;
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
    addDoc(ref, {
        bodyText: bodyText,
        updatedAt: Timestamp.fromDate(new Date())
    }).then((docRef) => {
        router.back();
    }).catch((error) => {
        Alert.alert("作成に失敗しました");
    });
}

const Create = (): JSX.Element => {
    const [bodyText, setBodyText] = useState("");

    return (
        <KeyboardSafeView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline autoFocus style={styles.input} value={bodyText} onChangeText={(text) => setBodyText(text)} />
            </View>
            <CircleButton onPress={() => handlePress(bodyText)}>
                <Icon name="check" size={40} color="#FFF" />
            </CircleButton>
        </KeyboardSafeView>
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

export default Create;
