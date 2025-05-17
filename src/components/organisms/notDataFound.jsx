"use client";

import React,{useState} from "react";

import Image from "next/image";

import { FaPlus } from "react-icons/fa6";

import AddPet from "@organisms/addPet";

import {StyledNotDataFound} from "@styles/styledNotDataFound";

function NotDataFound(){

    const[isOpenedForm, setIsOpenedForm] = useState(false);

    return(
        <>
            {
                isOpenedForm ? (
                    <AddPet action={setIsOpenedForm}/>
                ) : (
                    <StyledNotDataFound>
                        <Image src="/images/imagem-cachorrinho-triste.png" width="250" height="330" alt="cachorrinho triste"/>
                        <p>
                            Ops, pareçe que você ainda não cadastrou nenhum de seus pets.
                        </p>
                        <button type="button" onClick={()=>{setIsOpenedForm(true)}}>
                            <FaPlus/>
                            adicionar
                        </button>
                    </StyledNotDataFound>
                )
            }
        </>
    )
};

export default NotDataFound;

