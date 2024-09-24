import { getProducts } from "@/services/auth";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

const useFetchProduct = (size: number, page: number, sort: string) => {
  return useQuery({
    queryKey: ["getProducts", { size, page, sort }],
    queryFn: ({
      queryKey,
    }: QueryFunctionContext<
      [string, { size: number; page: number; sort: string }]
    >) => {
      const { size, page, sort } = queryKey[1];
      return getProducts(size, page, sort);
    },
  });
};
export default useFetchProduct;
