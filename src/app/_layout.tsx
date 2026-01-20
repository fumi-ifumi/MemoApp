import { Stack } from "expo-router";
import { JSX } from "react";

const Layout = ():JSX.Element => {
    return <Stack screenOptions={{
        headerStyle: { backgroundColor: "#467FD3"},
        headerTintColor: "#FFF",
        headerTitle: "Memo App",
        headerTitleStyle: {
            fontSize: 22,
            fontWeight: "bold"
        },
        headerBackTitle: "Back"
    }} />
}

export default Layout;
