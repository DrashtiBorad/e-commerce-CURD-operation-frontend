import { userLogin } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { ApiError } from "next/dist/server/api-utils";

const useLogin = () => {
  return useMutation({
    mutationFn: userLogin,
    onError: (err: ApiError) => err,
  });
};
export default useLogin;
