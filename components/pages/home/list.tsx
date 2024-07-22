import { FlatList, StyleSheet } from "react-native"; 
import { Colors } from "@/constants/Colors";
import Div from "@/components/div"; 
import Divider from "@/components/divider"; 
import Text from "@/components/text";
import { useList } from '@/utils/service';
import { RenderItem, RenderItemSkeleton } from '@/components/pages/home/item'
import { homeStore } from "@/components/pages/home/store";
import { useRouter } from "expo-router";
import { PropsItem } from './interface';
import { useEffect, useState } from "react";

export interface PropDataTable {
  index: number 
}

const ItemSeparatorComponent = ()=> {
  return (
    <Div px={10}>
      <Divider />
    </Div>
  )
}

const ListEmptyComponent = () => {
  return <Text fontFamily="bold" size={22}>No se encontraron registros.</Text>
}

export default function ListHome({data, isLoading}: { data: PropsItem[], isLoading: boolean}){ 
    const dataSkeleton: PropsItem[] = Array.from(
      { length: 4 },
      (_, index) => ({ 
        id: String(index),
        name: '',
        description:'',
        logo: '',
        date_release: '',
        date_revision: ''
       })
    );
    const router = useRouter();
    const { setSelect } = homeStore((state) => state); 

    const onSelect = (item: PropsItem)=> {
        setSelect(item);
        router.push(`detail/${item.id}`);
    }

    
    return (
       <> 
        <FlatList
            renderItem={({item})=>
            isLoading ?
            <RenderItemSkeleton /> :
            <RenderItem item={item} onSelect={onSelect}  /> }
            data={isLoading ? dataSkeleton : data}   
            contentContainerStyle={styles.container}
            ItemSeparatorComponent={ItemSeparatorComponent} 
            ListEmptyComponent={(!isLoading && data) ?  <ListEmptyComponent /> : null}
          /> 
       </>
    )
}

const styles = StyleSheet.create({
  container: {  
    borderRadius: 5,
    borderWidth: .5,
    borderColor: Colors.gray.border,  
    padding:5
  },
 
});
