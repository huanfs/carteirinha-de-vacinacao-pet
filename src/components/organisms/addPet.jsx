"use client";

import React,{useState} from "react";

import { IoMdClose } from "react-icons/io";

import InputWithLabel from "@molecules/inputWithLabel";

import AnimalButton from "@atoms/animalButton";

import VaccineList from "@organisms/vaccineList";

import useVaccineList from "@store/useVaccineList";

import {AddInformations} from "@services/addInformations";

import {StyledAddPet} from "@styles/styledAddPet";

function AddPet({action}){

    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    const[weight, setWeight] = useState("");

    const{vaccineList} = useVaccineList(); //*trabalhando aqui*/

    return(
        <StyledAddPet>
            <button type="button" onClick={()=>{action(false)}}>
                <IoMdClose/>
            </button>
            <InputWithLabel name="nome do pet" action={setName}/>
            <InputWithLabel name="idade do pet" action={setAge}/>
            <InputWithLabel name="peso do pet" action={setWeight}/>
            <article>
                <AnimalButton animal="cachorro" color="var(--Desaturated-yellow)"/>
                <AnimalButton animal="gato" color="var(--Brown)"/>
                <AnimalButton animal="outro" color="var(--Gray)"/>
            </article>
            <VaccineList/>
            <button onClick={()=>{AddInformations(name, age, weight, vaccineList)}}>
                adicionar
            </button>
        </StyledAddPet>
    )
};

export default AddPet;