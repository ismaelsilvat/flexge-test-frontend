import { api } from "../config/axios";

export interface UserInfoSignIn {
  email: string | any;
  password: string | any;
}

export function useLogin(UserInfo: UserInfoSignIn) {
  const data = {
    email: UserInfo.email,
    password: UserInfo.password,
  };

  return api.post(`/login`, data).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
