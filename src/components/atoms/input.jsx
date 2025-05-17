import React from "react";

import {StyledInput} from "@styles/styledInput";

function Input({type, placeholder, action, tag}){
    return(
        <StyledInput
            name={tag && tag}
            type={type}
            placeholder={placeholder}
            onChange={(event)=>{action && action(event.target.value)}}
        />
    )
};

export default Input;