import { View, Text, StyleSheet } from "react-native";

const MemoListItem = (): JSX.Element => {
    return (
        <View style={styles.memoListItem}>
            <View>
                <Text style={styles.memoListItemTitle}>買い物リスト1</Text>
                <Text style={styles.memoListItemDate}>2023年10月1日 10:00</Text>
            </View>
            <View>
                <Text>X</Text>
            </View>
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
