import React, { createContext } from "react";

export const DataContext = createContext();

const UserContext = ({ children}) => {
  const userData = {
    username: "Rudra",
    age: 23,
    city: "Delhi",
  };
  return (
    <div>
         <DataContext.Provider value={userData}>{children}</DataContext.Provider>

    </div>
  )
    
     
};

export default UserContext;
