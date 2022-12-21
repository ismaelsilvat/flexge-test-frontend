import { IContract } from "../services/useContractPost";
import { Contract } from "../store/types/types";

// eslint-disable-next-line @typescript-eslint/no-redeclare
export interface Contract extends Contract {
  _id: string;
}

export interface ContractService {
  fetchContracts: (searchQuery: string, token: string) => Promise<Contract[]>;
}
