"use client";

import styled from "styled-components";

export const StyledVaccineList = styled.section`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    gap: var(--Space-short);
    align-items:flex-start;

        & > article{
            width:100%;
            display:flex;
            align-items:center;
            gap: var(--Space-short);
            overflow-x: scroll;
            scrollbar-width:none;

                &::-webkit-scrollbar{
                    display:none;
                }
        }
`;