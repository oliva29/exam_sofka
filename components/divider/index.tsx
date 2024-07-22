import { Colors } from "@/constants/Colors";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function Divider(){
    return (
        <View style={styles.container} /> 
    )
}

const styles = StyleSheet.create({
    container: { 
      width: '100%', 
      borderBottomWidth:.5,
      borderColor: Colors.gray.border,
      margin: 1
    },
  });
  