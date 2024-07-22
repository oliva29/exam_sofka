import { StyleSheet } from "react-native";
import Div from "@/components/div";
import List from "./list";
import Search from "./search";
import Text from "@/components/text";
import { useForm } from "react-hook-form";
import FormProvider from "@/components/hook-form/form-provider";
import { homeStore } from "@/components/pages/home/store";
import { Link } from "expo-router";
import Button from "@/components/button";
import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import { PropsItem } from "./interface";
import { useList } from "@/utils/service";

export default function Home() {
  const methods = useForm(); 
  const [dataFilter, setDataFilter] = useState<PropsItem[]>([])
  const { data, isLoading } = useList({
    resource: 'bp/products',
  }); 

  const onFilter = (value: string)=> { 
    const res = data?.filter((item: PropsItem) => item?.name.toLowerCase().search(value.toLowerCase()) !== -1);
    setDataFilter(res) 
  } 

  useEffect(()=>{
    console.log(data,'data')
    setDataFilter(data)
  }, [data]);
  
  const onSubmitEditing = methods.handleSubmit(({search})=> {
    onFilter(search)
  })

  return (
    <FormProvider methods={methods}>
       <Div style={styles.options} mb={15}>
          <Text>Resultados: {dataFilter.length}</Text>
          <Div style={{width: 100}}>
          <Link href="/register" asChild>
            <Button bg={Colors.yellow} title="Agregar" />
          </Link>
          </Div>
        </Div>
      <Search onSubmitEditing={onSubmitEditing} />
      <Div mt={15}> 
        <List data={dataFilter} isLoading={isLoading} />
      </Div>
    </FormProvider>
  );
}

const styles = StyleSheet.create({ 
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});