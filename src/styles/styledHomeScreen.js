"use client";

import styled from "styled-components";

export const StyledHomeScreen = styled.main`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    padding: 5em 0;
    background-image:url(images/bg.png);
    background-size: 100% 100%;
    animation-name: animation-appear;
    animation-duration: var(--Short);
    animation-iteration-count:1;
`;