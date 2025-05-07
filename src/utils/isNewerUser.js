"use client";

import NotDataFound from "@organisms/notDataFound";

let animals = sessionStorage.getItem("animais");

if(animals != ""){
    return <h1>tem animais</h1>
}
else{
    return <NotDataFound/>
}