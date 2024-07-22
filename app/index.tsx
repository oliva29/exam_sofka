import Div from "@/components/div"; 
import Home from "@/components/pages/home";
import { useForm } from "react-hook-form";

export default function Page() { 

  return (
    <Div bg="white" flex={1}>
       <Home />
    </Div>
  );
}
