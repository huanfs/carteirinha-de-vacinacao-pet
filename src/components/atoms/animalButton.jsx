import React from "react";

import useAnimalOption from "@store/useAnimalOption";

import {StyledAnimalButton} from "@styles/styledAnimalButton";

function AnimalButton({animal, color}){

    const{setOption} = useAnimalOption();

    return(
        <StyledAnimalButton 
            type="button" 
            value={animal} 
            style={{backgroundColor:color}}
            onClick={()=>{setOption(animal)}}
        />
    )
};

export default AnimalButton;