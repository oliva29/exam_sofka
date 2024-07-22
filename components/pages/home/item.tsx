import { StyleSheet } from "react-native"; 
import Button from '@/components/button';
import { Colors } from "@/constants/Colors";
import Div from "@/components/div";
import Text from "@/components/text";  
import { PropsItem } from './interface';


export const RenderItem = (props: { item: PropsItem, onSelect: (value: PropsItem)=> void}) => {   
    const { id, name } = props.item; 

    const onItem = ()=> props.onSelect(props.item);

    return ( 
       <Button iconRight="angle-right" bg={Colors.white} borderRadius={0} onPress={onItem}> 
          <Div>
          <Text>
            {name}
          </Text>
          <Text size={11} textColor={Colors.gray.text}>
            ID: {id}
          </Text>
          </Div> 
       </Button>  
    );
} 

export const RenderItemSkeleton = () => {   
    return ( 
       <Button iconRight="angle-right" bg={Colors.white} borderRadius={0}> 
          <Div>
           <Div bg={Colors.gray.button} style={styles.itemName} my={3}>
            {null}
           </Div>
          <Div style={styles.itemID}>
          <Text size={11} textColor={Colors.gray.text}>
            ID: 
            </Text>
            <Div bg={Colors.gray.button} style={styles.itemName} my={3} ml={15}>
            {null}
           </Div>
          </Div> 
          </Div> 
       </Button>  
    );
} 


const styles = StyleSheet.create({ 
  itemID: { 
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: 'center'
  },
  itemName: {
    height: 10, borderRadius: 5, width: 50
  }
});