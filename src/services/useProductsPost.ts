import { api } from "../config/axios";
import { IProduct } from "../store/contract/add/products";

export function useProductsPost(
  Products: IProduct[],
  contract: string,
  token: string
) {
  return Products.map((e) => {
    var element = e;
    element = { ...element, contract: contract };

    return api
      .post(`/auth/product`, element, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        (response) => {
          return response.data;
        },
        (error) => {
          return error.response;
        }
      );
  });
}
