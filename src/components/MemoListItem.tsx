import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { JSX } from "react";

import Icon from "./Icon";

const MemoListItem = (): JSX.Element => {
    return (
        <View style={styles.memoListItem}>
            <View>
                <Text style={styles.memoListItemTitle}>買い物リスト1</Text>
                <Text style={styles.memoListItemDate}>2025年10月1日 10:00</Text>
            </View>
            <TouchableOpacity>
                <Icon name="delete" size={32} color="#B0B0B0" />
            </TouchableOpacity>
        </View>
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
