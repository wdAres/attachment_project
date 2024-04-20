import { createContext, useState } from "react";

const StatesContext = createContext(null);

// const StatesContext = ({ children }) => {

//   return (
//     <States.Provider
//       value={{ data,updateData }}
//     >
//       {children}
//     </States.Provider>
//   );
// };

export default StatesContext;
