import React, {useEffect} from "react";

import useStatusMessage from "@store/useStatusMessage";

import {StyledStatusMessage} from "@styles/styledStatusMessage";

function StatusMessage(){

    const {message, setMessage} = useStatusMessage();

    useEffect(()=>{
        setTimeout(()=>{
            setMessage("");
        }, 3000)
    },[message])

    return(
        <StyledStatusMessage>
            {message}
        </StyledStatusMessage>
    )
};

export default StatusMessage;