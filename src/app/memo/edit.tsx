import { View, TextInput, KeyboardAvoidingView, Alert, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { JSX, useState, useEffect } from "react";

import { db, auth } from "../../config";

import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";

const handlePress = (id: string, bodyText: string): void => {
    if (auth.currentUser === null) return;
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
    setDoc(ref, { bodyText, updatedAt: Timestamp.fromDate(new Date()) }, { merge: true })
    .then(() => {
    })
    .catch((error) => {
    });
    router.back();
}

const Edit = (): JSX.Element => {
    const id = String(useLocalSearchParams().id);
    const [bodyText, setBodyText] = useState("");
    useEffect(() => {
        if (auth.currentUser === null) return;
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
        getDoc(ref)
        .then((docref) => {
            const RemoteBodyText = docref?.data()?.bodyText;
            setBodyText(RemoteBodyText);
        })
        .catch((error) => {
            Alert.alert("更新に失敗しました");
        })
    }, []);
    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline style={styles.input} onChangeText={(text) => {setBodyText(text)}} value={bodyText} />
            </View>
            <CircleButton onPress={() => handlePress(id, bodyText)}>
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
