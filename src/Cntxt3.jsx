import React from "react";
import { fname, lname } from "./ContextApi";

const compC = () => {
    return (                // for receiving the value passed by parent.
        <fname.Consumer>        
            {(value) => {
                return (
                    <lname.Consumer>
                        {(val) => {     //It only takes cllback functional arguments.
                            return (
                                <h1>Hello, {value} {val}</h1>
                            );
                        }}
                    </lname.Consumer>
                );
            }}
        </fname.Consumer>
    );
}

export default compC;