"use client";

import styled from "styled-components";

export const StyledTitle = styled.h1`
    font-size: var(--Title-size);
    font-family: var(--Pacifico);
    color:var(--Brown);
    text-shadow: var(--Shadow);
    text-transform: capitalize;
    text-align:center;
    animation-name: animation-move-from-left;
    animation-duration: var(--Short);
    animation-iteration-count:1;
`;