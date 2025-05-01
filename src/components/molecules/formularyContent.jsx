import React from "react";

import Subtitle from "@atoms/subtitle";

import Input from "@atoms/input";

import PrimaryButton from "@atoms/primaryButton";

import useFormOption from "@store/useFormOption";

import {StyledFormularyContent} from "@styles/styledFormularyContent";

function FormularyContent(){

    const {option} = useFormOption(); 

    return(
        <StyledFormularyContent>
            <Subtitle content={option}/>
            <Input type="text" placeholder="usuário"/>
            <Input type="password" placeholder="senha"/>
            {
                option === "registrar" && <Input type="password" placeholder="confirmar senha"/>
            }
            <PrimaryButton value={option}/>
        </StyledFormularyContent>
    )
};

export default FormularyContent;