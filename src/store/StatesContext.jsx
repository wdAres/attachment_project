import { createContext, useState } from "react";

export const States = createContext(null);

const StatesContext = ({ children }) => {
  const [data,setData] = useState({
    from:{},
    desination:{}
  })

  const updateData= data => {
    setData(prev=>({
      ...prev,
      data
    }))
  }

  return (
    <States.Provider
      value={{ data,updateData }}
    >
      {children}
    </States.Provider>
  );
};

export default StatesContext;
