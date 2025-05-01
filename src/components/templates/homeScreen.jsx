import React from "react";

import Title from "@atoms/title";

import FormButtonsSection from "@molecules/formButtonsSection";

import {StyledHomeScreen} from "@styles/styledHomeScreen";

function HomeScreen(){
    return(
        <StyledHomeScreen>
            <Title value="Carteirinha de vacinação pet"/>
            <FormButtonsSection/>
        </StyledHomeScreen>
    )
};

export default HomeScreen;