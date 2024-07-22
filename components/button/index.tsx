import React, { useState , forwardRef  } from "react";
import { StyleSheet, Pressable, Animated } from "react-native";

import Text from "@/components/text";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "@/constants/Colors";
import Div from "../div";

interface PropssButton {
  title?: string;
  bg?: string;
  textColor?: string;
  onPress?: (e: any) => void;
  iconRight?: keyof typeof FontAwesome.glyphMap;
  children?: React.ReactNode,
  borderRadius?: number
}

const LinkButton = forwardRef(({
  title,
  bg = "#FFD700",
  textColor,
  onPress,
  iconRight,
  children,
  borderRadius = 5
}: PropssButton, ref) => {
  const [opacity, setOpacity] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.timing(opacity, {
      toValue: 0.5,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const buttonJustifyContent = iconRight ? 'space-between' : 'center';

  return (
    <Pressable 
      ref={ref}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      ref={ref}>
      <Animated.View style={[styles.container, 
        { opacity, 
          backgroundColor: bg,
          justifyContent: buttonJustifyContent,
          borderRadius,
          width: '100%',
        }]}>
        <Div>
        { title ? <Text textColor={textColor} onPress={onPress}>{title}</Text> : children }
        </Div>
        <Div>
        { iconRight ? <FontAwesome name={iconRight} size={20} color={Colors.gray.border} /> : null}
        </Div>
      </Animated.View>
    </Pressable>
  )
})

const styles = StyleSheet.create({
  container: { 
    padding: 16, 
    flexDirection: "row",  
  },
});

export default LinkButton;