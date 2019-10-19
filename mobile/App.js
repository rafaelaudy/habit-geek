import React from "react";
import { WebView } from "react-native";

export default function App() {
  return (
    <WebView source={{ uri: "https://github.com/facebook/react-native" }} />
  );
}
