import * as yup from "yup";

export const AppProductSchema: yup.ObjectSchema<any> = yup.object().shape({
  name: yup.string().required().label("Name"),
  price: yup.string().required().label("Price"),
  category: yup.string().required().label("Category"),
  company: yup.string().required().label("Comapny"),
});
