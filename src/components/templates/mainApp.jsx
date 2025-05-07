"use client";

import React,{useState, useEffect} from "react";

import {StyledMainApp} from "@styles/styledMainApp";

import NotFoundData from "@organisms/notDataFound";

import Header from "@organisms/header";

function MainApp(){

    const[isNewerUser, setIsNewerUser] = useState(false);

    useEffect(()=>{
        sessionStorage.animais != "" ? setIsNewerUser(false) : setIsNewerUser(true); //verifica se existem animais ( o que representa usuario antigo);
    },[sessionStorage.animais])

    return(
        <StyledMainApp>
            <section>
            {/*tudo que estiver aqui dentro não tem blur*/}
                <Header/>
                {
                    isNewerUser && <NotFoundData/>
                }
            </section>
        </StyledMainApp>
    )
};

export default MainApp;