import React from "react";

import {StyledTitle} from "@styles/styledTitle";

function Title({value}){
    return(
        <StyledTitle>
            {value}
        </StyledTitle>
    )
};

export default Title;