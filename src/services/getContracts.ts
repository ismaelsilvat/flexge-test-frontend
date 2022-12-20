import { Contract, ContractService } from "../util/index";

import { api } from "../config/axios";

const apiUrl = "/auth/contracts";

export const contractsService: ContractService = {
  fetchContracts: async (searchQuery: string, token: string) => {
    if (searchQuery === "") {
      return api
        .get(apiUrl, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => response)
        .then((data) => {
          return (data.data || []).map((contract: Contract) => {
            return {
              contract,
            };
          });
        });
    } else {
      return api
        .get(apiUrl + searchQuery, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => response)
        .then((data) => {
          return (data.data || []).map((contract: Contract) => {
            return {
              contract,
            };
          });
        });
    }
  },
};
