import { api } from "../config/axios";
import { IProduct } from "../store/contract/add/products";

export async function useProductsPost(
  Products: IProduct[],
  contract: string,
  token: string
) {
  for (let index = 0; index < Products.length; index++) {
    var element = Products[index];
    element = { ...element, contract: contract };

    return await api
      .post(`/auth/product`, element, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        (response) => {
          return true;
        },
        (error) => {
          return false;
        }
      );
  }
}
