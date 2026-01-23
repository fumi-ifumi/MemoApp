import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { doc, deleteDoc } from "firebase/firestore";
import { JSX } from "react";

import { db, auth } from "../config";
import { type Memo } from "../../types/memo";

import Icon from "./Icon";

interface Props {
    memo: Memo
}

const handlePress = (id: string): void => {
    if (auth.currentUser === null) return;
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
    Alert.alert("メモを削除します", "宜しいですか？", [
        {
            text: "キャンセル",
        },
        {
            text: "削除",
            style: "destructive",
            onPress: () => {
                deleteDoc(ref)
                .catch((error) => {
                    Alert.alert("削除に失敗しました");
                });
            }
        }
    ]);
};

const MemoListItem = (props: Props): JSX.Element | null => {
    const { memo } = props;
    const { bodyText, updatedAt } = memo;
    if(bodyText === null || updatedAt === null) return null;
    const dateString = updatedAt.toDate().toLocaleString("ja-JP");
    return (
        <Link href={{ pathname: "/memo/detail", params: { id: memo.id } }} asChild>
            <TouchableOpacity style={styles.memoListItem}>
                <View style={{ maxWidth: "80%" }}>
                    <Text numberOfLines={1} style={styles.memoListItemTitle}>{bodyText}</Text>
                    <Text style={styles.memoListItemDate}>{dateString}</Text>
                </View>
                <TouchableOpacity onPress={() => {handlePress(memo.id);}}>
                    <Icon name="delete" size={32} color="#B0B0B0" />
                </TouchableOpacity>
            </TouchableOpacity>
        </Link>
    );
};

const styles = StyleSheet.create({
    memoListItem: {
        backgroundColor: "#FFF",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 16,
        paddingHorizontal: 19,
        borderBottomColor: "rgba(0,0,0,0.15)",
        borderBottomWidth: 1
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32
    },
    memoListItemDate: {
        color: "#848484",
        fontSize: 12,
        lineHeight: 16
    },
});

export default MemoListItem;
