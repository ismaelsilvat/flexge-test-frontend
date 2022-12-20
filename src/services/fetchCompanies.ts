import { api } from "../config/axios";

export function fetchCompanies(token: string) {
  return api
    .get(`/auth/companies`, { headers: { Authorization: `Bearer ${token}` } })
    .then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error.response.status;
      }
    );
}
