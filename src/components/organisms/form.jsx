import React from "react";

import FormularyContent from "@molecules/formularyContent";

import Close from "@atoms/close";

import {StyledForm} from "@styles/styledForm";

function Form(){
    return(
        <StyledForm>
            <Close/>
            <FormularyContent/>
        </StyledForm>
    )
};

export default Form;