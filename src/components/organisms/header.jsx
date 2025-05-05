import React from "react";

import MenuButton from "@atoms/menuButton";

import {StyledHeader} from "@styles/styledHeader";

function Header(){
    return(
        <StyledHeader>
            <MenuButton/>
        </StyledHeader>
    )
};

export default Header;