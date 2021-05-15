import React from "react";
import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";
import Card from "../components/Card";

function QueueScreen() {
  return (
    <Screen>
      <HeadingText>Currently Waiting</HeadingText>
      <Card title="Mohmed Ishak" subTitle="10 cheeseburgers." />
      <Card title="Mohmed Ishak" subTitle="10 cheeseburgers." />
      <Card title="Mohmed Ishak" subTitle="10 cheeseburgers." />
    </Screen>
  );
}

export default QueueScreen;
