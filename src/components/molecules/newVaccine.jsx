"use client";

import React,{useState, useEffect} from "react";

import Input from "@atoms/input";

import useVaccineList from "@store/useVaccineList";

import { IoMdClose } from "react-icons/io";

import {StyledNewVaccine} from "@styles/styledNewVaccine";

function NewVaccine({action}){

    const{vaccineList, setVaccine} = useVaccineList();

    const[vaccineName, setVaccineName] = useState("");
    const[vaccineDate, setVaccineDate] = useState("");

    function addVaccineIntoList(){
        setVaccine({
            vaccineName:vaccineName,
            vaccineDate:vaccineDate
        })
        action(false);
    };

    useEffect(()=>{
        console.log(vaccineList)
    },[vaccineList])

    return(
        <StyledNewVaccine>
            <div>
                <IoMdClose onClick={()=>{action(false)}}/>
                <Input placeholder="nome da vacina" action={setVaccineName}/>
                <Input placeholder="data de aplicação" action={setVaccineDate}/>
                <button type="button" onClick={addVaccineIntoList}>
                    adicionar
                </button>
            </div>
        </StyledNewVaccine>
    )
};

export default NewVaccine;