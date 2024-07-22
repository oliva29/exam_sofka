import { View, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "@/constants/Colors";
import Text from "@/components/text";
import Div from "@/components/div";

export default function Header() {
  return (
    <View style={styles.container}>
      <FontAwesome name="money" size={24} color="black" />
      <Div ml={8}>
      <Text fontFamily="bold">BANCO</Text>
      </Div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: Colors.gray.border,
    borderBottomWidth: 1,
    paddingVertical: 4
  },
});
