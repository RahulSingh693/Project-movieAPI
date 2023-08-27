import React, { useContext } from "react";
import { Fname, Lname } from "./ContextApi";

const CompB = () => {
    const fname = useContext(Fname);  //for passing value from parent to any child without passing props.
    const lname = useContext(Lname);

    return (
        <h1>Hello, {fname} {lname}</h1>
    );
}

export default CompB;