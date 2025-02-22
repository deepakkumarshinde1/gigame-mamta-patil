import { createContext, useContext, useState } from "react";

// content
let UserFromContext = createContext();
// access shared data we create custom hook

export const useUserFromContext = () => {
  return useContext(UserFromContext);
};
// provider
export const UserFormContextProvider = (props) => {
  const { children } = props;
  let [userForm, setUserForm] = useState({
    username: "deepak",
    email: "",
    mobile: "9876543234",
  });

  let handelInput = (event) => {
    let { name, value } = event.target;
    setUserForm({ ...userForm, [name]: value });
  };
  let share = {
    userForm,
    handelInput,
  };
  return (
    <UserFromContext.Provider value={share}>
      {children}
    </UserFromContext.Provider>
  );
};

// custom hooks
