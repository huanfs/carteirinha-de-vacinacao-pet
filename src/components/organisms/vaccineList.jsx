import React from "react";

import AddButton from "@atoms/addButton";

import {StyledVaccineList} from "@styles/styledVaccineList";

function VaccineList(){
    return(
        <StyledVaccineList>
            <p>lista de vacinas:</p>
            <article>
                <AddButton/>
            </article>

        </StyledVaccineList>
    )
};

export default VaccineList;