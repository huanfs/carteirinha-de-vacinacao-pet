"use client";

import React from "react";

import useFormOption from "@store/useFormOption";

import Title from "@atoms/title";

import FormButtonsSection from "@molecules/formButtonsSection";

import {StyledHomeScreen} from "@styles/styledHomeScreen";

function HomeScreen(){

    const {option, setOption} = useFormOption();

    return(
        <StyledHomeScreen>
            <Title value="Carteirinha de vacinação pet"/>
            <FormButtonsSection/>
        {/*IMPORTAR O FORMULÁRIO*/}
        </StyledHomeScreen>
    )
};

export default HomeScreen;