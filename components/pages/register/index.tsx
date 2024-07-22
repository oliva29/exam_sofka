import { ScrollView, StyleSheet } from "react-native";
import Div from "@/components/div";
import FormProvider, { TextInput } from "@/components/hook-form";
import { useForm } from "react-hook-form";
import Text from "@/components/text";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import Button from "@/components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { PropsForm } from "./interface";
import { schema } from "./schema";

export default function PageRegister() {
  const methods = useForm<PropsForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data, "data");
  });

  return (
    <Div bg="white" flex={1}>
      <Text size={22} fontFamily="bold">
        Formulario de Registro
      </Text>
      <ScrollView>
        <FormProvider methods={methods}>
          <Div mt={20}>
            <TextInput name={"id"} isLoading={false} label={"ID"} />
          </Div>
          <Div mt={20}>
            <TextInput name={"name"} isLoading={false} label={"Nombre"} />
          </Div>
          <Div mt={20}>
            <TextInput
              name={"description"}
              isLoading={false}
              label={"Descripción"}
            />
          </Div>
          <Div mt={20}>
            <TextInput name={"logo"} isLoading={false} label={"Logo"} />
          </Div>
          <Div mt={20}>
            <TextInput
              name={"date_liberation"}
              isLoading={false}
              label={"Fecha Liberación"}
            />
          </Div>
          <Div mt={20}>
            <TextInput
              name={"date_revision"}
              isLoading={false}
              label={"Fecha Revisión"}
            />
          </Div>
        </FormProvider>
      </ScrollView>
      <Div style={styles.actions}  mt={20} bg="white">
        <Div style={{ width: "100%" }}>
          <Link href="/register" asChild>
            <Button bg={Colors.yellow} title="Enviar" onPress={onSubmit} />
          </Link>
          <Div mt={15}>
            <Button bg={Colors.gray.button} title="Reiniciar" />
          </Div>
        </Div>
      </Div>
    </Div>
  );
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
  },
});
