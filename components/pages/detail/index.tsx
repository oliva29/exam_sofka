import Div from "@/components/div";
import Text from "@/components/text";
import { StyleSheet } from "react-native";
import Image from "@/components/image"; 
import Button from "@/components/button";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { homeStore } from "@/components/pages/home/store";
import useFormattedDate  from "@/hooks/useFormattedDate";

export default function Detail() {
  const { select } = homeStore((state) => state); 
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit', 
  };

  const formatte_date_release = useFormattedDate({ date: select?.date_release, options });
  const formatte_date_revision = useFormattedDate({ date: select?.date_revision, options });
  
  return (
    <Div style={styles.container}>
      <Div bg="white" flex={1}>
        <Text size={20} fontFamily="bold">
          ID: {select?.id}
        </Text>
        <Text>Información extra</Text>
      </Div>
      <Div flex={3} style={styles.body}  bg="white"> 
          <Div style={{ width: "100%" }}>
            <Div style={styles.item}>
              <Text>Nombre</Text>
              <Text fontFamily="bold">{select?.name}</Text>
            </Div>
            <Div style={styles.item}>
              <Text>Descripción</Text>
              <Text fontFamily="bold">{select?.description}</Text>
            </Div>

            <Div style={styles.containerImg} my={40}>
             { select?.logo ? <Image
                source={select?.logo}
                h={110}
                w={200}
                rounded={8}
                contentFit={"center"}
              /> : null}
            </Div>

            <Div>
              <Div style={styles.item}>
                <Text>Fecha de liberación</Text>
                <Text fontFamily="bold">{formatte_date_release}</Text>
              </Div>
              <Div style={styles.item}>
                <Text>Fecha de revisión</Text>
                <Text fontFamily="bold">{formatte_date_revision}</Text>
              </Div>
            </Div>
          </Div> 
      </Div>

      <Div style={styles.actions} flex={2} bg="white">
        <Div style={{ width: "100%" }}>
          <Link href="/register" asChild>
          <Button bg={Colors.gray.button} title="Editar" />
          </Link>
          <Div mt={15}>
            <Button
              bg={Colors.red.button}
              title="Eliminar"
              textColor={Colors.white}
            />
          </Div>
        </Div>
      </Div>
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  item: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerImg: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  actions: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
  },
});
