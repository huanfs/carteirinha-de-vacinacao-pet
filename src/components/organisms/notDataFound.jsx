import React from "react";

import Image from "next/image";

import {StyledNotDataFound} from "@styles/styledNotDataFound";

import AddButton from "@atoms/addButton";

function NotDataFound(){
    return(
        <StyledNotDataFound>
            <Image src="/images/imagem-cachorrinho-triste.png" width="250" height="330" alt="cachorrinho triste"/>
            <p>
                Ops, pareçe que você ainda não cadastrou nenhum de seus pets.
            </p>
            <AddButton/>
        </StyledNotDataFound>
    )
};

export default NotDataFound;