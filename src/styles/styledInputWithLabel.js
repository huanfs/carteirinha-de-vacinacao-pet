"use client";

import styled from "styled-components";

export const StyledInputWithLabel = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap: var(--Space-short);

        & label{
            text-transform:capitalize;
            font-size: var(--Text-size);
            color:var(--Brown);
        }
`;