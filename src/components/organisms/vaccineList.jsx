"use client";

import React from "react";

import AddButton from "@atoms/addButton";

import Vaccine from "@molecules/vaccine";

import useVaccineList from "@store/useVaccineList";

import {StyledVaccineList} from "@styles/styledVaccineList";

function VaccineList(){

    const{vaccineList} = useVaccineList();

    return(
        <StyledVaccineList>
            <p>lista de vacinas:</p>
            <article>
                <AddButton/>
                {
                    vaccineList.length > 0 ? (
                        vaccineList.map((item, index)=>{
                            return(
                                <Vaccine vaccineName={item.vaccineName} vaccineDate={item.vaccineDate} key={index}/>
                            )
                        })
                    ) : null
                }
            </article>

        </StyledVaccineList>
    )
};

export default VaccineList;