import React from "react";

import Input from "@atoms/input";

import {StyledInputWithLabel} from "@styles/styledInputWithLabel";

function InputWithLabel({name}){
    return(
        <StyledInputWithLabel>
            <label htmlFor={name} translate="no">{name}</label>
            <Input type="text" tag={name}/>
        </StyledInputWithLabel>
    )
};

export default InputWithLabel;