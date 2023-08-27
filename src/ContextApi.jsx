import React, { createContext } from "react";
import CompA from "./Cntxt1";

const Fname = createContext();
const Lname = createContext();

function ContextApi() {
  return (
    <>
      <Fname.Provider value={"Rahul"}>
        <Lname.Provider value={"Singh"}>
          <CompA />
        </Lname.Provider>
      </Fname.Provider>
    </>
  );
}

export default ContextApi;
export { Fname, Lname };
