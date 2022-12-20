import { IContract } from "../services/useContractPost";

export interface Contract extends IContract {
  _id: string;
}

export interface ContractService {
  fetchContracts: (searchQuery: string, token: string) => Promise<Contract[]>;
}
