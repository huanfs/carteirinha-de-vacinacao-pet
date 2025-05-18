import React from "react";

import { IoInformationCircleOutline } from "react-icons/io5";

import {StyledVaccine} from "@styles/styledVaccine";

function Vaccine({vaccineName, vaccineDate}){
    return(
        <StyledVaccine>
            <IoInformationCircleOutline/>
            <p>{vaccineName}</p>
            <p>{vaccineDate}</p>
        </StyledVaccine>
    )
};

export default Vaccine;