import { View, Text, StyleSheet } from "react-native";

const Header = (): JSX.Element => {
    return (
        <View style={styles.header}>
            <View style={styles.headerInner}>
                <Text style={styles.headerTitle}>Memo App</Text>
                <Text style={styles.headerRight}>ログアウト</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#467FD3",
        height: 104,
        justifyContent: "flex-end"
    },
    headerInner: {
        alignItems: "center"
    },
    headerTitle: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "bold",
        lineHeight: 32,
        marginBottom: 8
    },
    headerRight: {
        position: "absolute",
        color: "#FFF",
        opacity: 0.7,
        right: 16,
        bottom:16
    }
});

export default Header;
