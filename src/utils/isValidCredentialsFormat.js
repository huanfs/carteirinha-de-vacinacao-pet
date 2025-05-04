"use client";

import {CreateNewUser} from "@services/createNewUser";

export function IsValidCredentialsFormat(name, password, confirm, method, push){
    if(name.length < 6){
        console.log("nome tem menos de 6 letras não pode");
    }
    if(password.length < 8){
        console.log("senha tem menos de 8 letras, não pode");
    }
    if(method === "entrar"){
        console.log("metodo entrar");
    }
    else if(method === "registrar"){
        console.log("metodo registrar");
        if(password != confirm){
            console.log("as senhas não conferem")
        }
        else{
            CreateNewUser(name, password, push);
        }
    }
}