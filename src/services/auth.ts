import { apiRoutes } from "./apiRoutes";
import { axiosClient } from "./config/axiosClient";

export const userLogin = (payload: { email: string; password: string }) => {
  return axiosClient.post(apiRoutes.login, payload);
};

export const userRegistration = (payload: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobileNo: string;
}) => {
  return axiosClient.post(apiRoutes.registration, payload);
};

export const getProducts = (size: number, page: number, sort: string) => {
  return axiosClient.get(
    `${apiRoutes.getProducts}?size=${size}&page=${page}&sort=${sort}`
  );
};
