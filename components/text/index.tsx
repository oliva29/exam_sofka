import React from 'react';
import { Text, TextProps } from 'react-native'; 
 
interface PropsText extends TextProps {
    fontFamily?: string;
    textColor?: string;
    size?: number;
}
export default function TextApp( props : PropsText) {
    return (
        <Text 
            {...props} 
            style={{   
                fontFamily: props?.fontFamily || 'regular', 
                color: props?.textColor, 
                fontSize: props.size
            }}>
            {props.children}
        </Text>
    );
}
 