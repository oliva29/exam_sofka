import FormProvider, { TextInput } from "@/components/hook-form"; 

export default function Search({
  onSubmitEditing,
}: {
  onSubmitEditing: () => void;
}) {
  return (
    <TextInput
      name={"search"}
      isLoading={false}
      placeholder={"Search"}
      onSubmitEditing={onSubmitEditing}
    />
  );
}
