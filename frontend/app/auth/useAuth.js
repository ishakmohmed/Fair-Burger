import { useContext } from "react";
import jwtDecode from "jwt-decode";
import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    try {
      const user = jwtDecode(authToken);
      setUser(user);
      authStorage.storeToken(authToken);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};
