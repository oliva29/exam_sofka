import { useFormContext, Controller } from "react-hook-form";
import { TextInput, StyleSheet } from "react-native";
import Text from '@/components/text'
import { Colors } from "@/constants/Colors";
import Div from "../div";

interface PropsTextField {
  name: string;
  isLoading?: boolean;
  label?: string;
  placeholder?: string;
  onSubmitEditing?: ()=> void
}
const defaultProps = {
  isLoading: false, 
};

export default function TextInputApp({
  name,
  isLoading,
  label,
  placeholder,
  onSubmitEditing
}: PropsTextField & typeof defaultProps) {
  const { control } = useFormContext();
  
 
  return ( 
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } , fieldState: { error } }) => (
        <>
          { label ? <Text fontFamily={'bold'}>{label}</Text> : null }
          <TextInput
            style={styles.content}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            onSubmitEditing={onSubmitEditing}
            // keyboardType={keyboardType}
            // style={inputStyle}
            // onFocus={handleFocus}
            // onSubmitEditing={() => {
            //     Keyboard.dismiss()
            // }}
            // onBlur={handleBlur}
            // blurOnSubmit
            // editable={editable}
            // autoFocus={autoFocus}
            // multiline={multiline}
          />
            {(!!error) ? 
              <Div mt={3}>
                <Text textColor={Colors.red.text}>
                {error ? error?.message : ''}
              </Text>
              </Div>
               : null
           }
        </>
      )}
    />  
  );
}

const styles = StyleSheet.create({ 
  content: {
    borderColor: Colors.gray.border,
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    marginTop: 5
  },
}); 