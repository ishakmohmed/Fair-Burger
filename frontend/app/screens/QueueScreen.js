import React from "react";
import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";
import QueueCard from "../components/QueueCard";

function QueueScreen() {
  return (
    <Screen>
      <HeadingText>Currently Waiting</HeadingText>
      <QueueCard />
    </Screen>
  );
}

export default QueueScreen;
