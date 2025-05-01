import React from "react";

import {StyledInput} from "@styles/styledInput";

function Input({type, placeholder, action}){
    return(
        <StyledInput
            type={type}
            placeholder={placeholder}
            onChange={()=>{action ? action : null}}
        />
    )
};

export default Input;