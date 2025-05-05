import React from "react";

import useFormOption from "@store/useFormOption";

import { IoMdClose } from "react-icons/io";

function Close(){

    const {setOption} = useFormOption();

    return(
        <IoMdClose 
            style={{
                color:'var(--Soft-red)', 
                transform:'scale(1.5,1.5',
                position:'relative',
                top:'5rem',
                left:'3rem',
            }}
            onClick={() => setOption("")}
        />
    )
};

export default Close;