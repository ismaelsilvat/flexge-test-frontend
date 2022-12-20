import { api } from "../config/axios";

export interface IContract {
  country: String;
  state: String;
  city: String;
  document_number: Number;
  social_reason: String;
  address: String;
  district: String;
  address_number: Number;
  zip_code: Number;
  email: String;
  phone: String;
  start_date: Date;
  end_date: Date;
  due_day: Date;
  company: string;
}

export function useContractPost(ContractInfo: IContract, token: string) {
  return api
    .post(`/auth/contract`, ContractInfo, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(
      (response) => {
        return response.data._id;
      },
      (error) => {
        return error.response;
      }
    );
}
