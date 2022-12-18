import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { IUser } from "../util/IUser";

interface IUserContext {
  user?: IUser;
  logged: boolean;
  handleSetUserData: (user: IUser) => void;
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
  const [user, setUser] = useState<IUser>();
  const [logged, setLogged] = useState<boolean>(true);

  function handleSetUserData(newUser: IUser) {
    setUser(newUser);
    setLogged(!logged);
  }

  return (
    <UserContext.Provider value={{ user, logged, handleSetUserData }}>
      {children}
    </UserContext.Provider>
  );
};
