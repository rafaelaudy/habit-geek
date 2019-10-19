import React from "react";
import { WebView } from "react-native";

export default function App() {
  return (
    <WebView
      source={{ uri: "https://rafaelaudy.github.io/habit-geek" }}
      style={{ marginTop: 24 }}
    />
  );
}
