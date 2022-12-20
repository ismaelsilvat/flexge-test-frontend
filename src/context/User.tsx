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
  logged: boolean;
  handleSetUserData: (user: IUser) => void;
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
  const [logged, setLogged] = useState<boolean>(false);

  const handleSetUserData = useCallback(
    (newUser: IUser) => {
      setUser(newUser);
      setLogged(!logged);
    },
    [logged]
  );

  const logout = useCallback(() => {
    setUser({});
    setLogged(!logged);
  }, [logged]);

  return (
    <UserContext.Provider value={{ user, logged, handleSetUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};
