import Header from "./components/Header/Header";
import FormSide from "./components/FormSide/FormSide";
import { useFormValidation } from "./useFormValidation";

function Container() {
  const formData = useFormValidation();

  return (
    <>
      <Header cardContent={formData.cardContent} />
      <FormSide {...formData} />
    </>
  );
}

export default Container;
