"use client";

import React from "react";

import useFormOption from "@store/useFormOption";

import PrimaryButton from "@atoms/primaryButton";

import {StyledFormButtonsSection} from "@styles/styledFormButtonsSection";

function FormButtonsSection(){

    const {option, setOption} = useFormOption();

    return(
        <StyledFormButtonsSection>
            <PrimaryButton value="entrar" action={setOption}/>
            <PrimaryButton value="registrar" action={setOption}/>
        </StyledFormButtonsSection>
    )
};

export default FormButtonsSection;