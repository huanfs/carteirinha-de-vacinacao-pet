import React from "react";

import { IoMdClose } from "react-icons/io";

import AddButton from "@atoms/addButton";

import InputWithLabel from "@molecules/inputWithLabel";

import AnimalButton from "@atoms/animalButton";

import VaccineList from "@organisms/vaccineList";


import {StyledAddPet} from "@styles/styledAddPet";

function AddPet({action}){
    return(
        <StyledAddPet>
            <button type="button" onClick={()=>{action(false)}}>
                <IoMdClose/>
            </button>
            <InputWithLabel name="nome do pet"/>
            <InputWithLabel name="idade do pet"/>
            <InputWithLabel name="peso do pet"/>
            <article>
                <AnimalButton animal="cachorro" color="var(--Desaturated-yellow)"/>
                <AnimalButton animal="gato" color="var(--Brown)"/>
                <AnimalButton animal="outro" color="var(--Gray)"/>
            </article>
            <VaccineList/>
            <button>
                adicionar
            </button>
        </StyledAddPet>
    )
};

export default AddPet;