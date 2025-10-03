import React from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../../const/colors";

type TabBarLabelProps = {
  focused: boolean;
  title: string;
};

const TabBarLabel = ({ focused, title }: TabBarLabelProps) => {
  return (
    <Text
      style={[
        styles.label,
        { color: focused ? COLORS.PRIMARY : COLORS.GREY },
      ]}
    >
      {title}
    </Text>
  );
};

export default TabBarLabel;

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
  },
});
