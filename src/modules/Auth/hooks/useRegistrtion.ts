import { userRegistration } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { ApiError } from "next/dist/server/api-utils";

const useRegistration = () => {
  return useMutation({
    mutationFn: userRegistration,
    onError: (err: ApiError) => {
      console.log("err", err);
      return err;
    },
  });
};

export default useRegistration;
