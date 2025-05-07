import React from "react";

import { FaPlus } from "react-icons/fa6";

import {StyledAddButton} from "@styles/styledAddButton";

function AddButton(){
    return(
        <StyledAddButton>
            <FaPlus/>
            adicionar
        </StyledAddButton>
    )
};

export default AddButton;