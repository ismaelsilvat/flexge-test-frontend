import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import { IUser } from "../util/IUser";

interface IUserContext {
  user?: IUser | object;
  userToken: string;
  logged: boolean;
  handleSetUserData: (user: IUser, token: string) => void;
  logout: () => void;
}

interface Props {
  children?: React.ReactNode;
}

const UserContext = createContext({} as IUserContext);

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | object>();
  const [userToken, setUserToken] = useState<string>("");
  const [logged, setLogged] = useState<boolean>(false);

  const handleSetUserData = useCallback(
    (newUser: IUser, token: string) => {
      setUser(newUser);
      setUserToken(token);
      setLogged(!logged);
    },
    [logged]
  );

  const logout = useCallback(() => {
    setUser({});
    setUserToken("");
    setLogged(!logged);
  }, [logged]);

  return (
    <UserContext.Provider
      value={{ user, userToken, logged, handleSetUserData, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
