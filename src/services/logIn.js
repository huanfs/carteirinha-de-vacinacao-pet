"use client";

import axios from "axios";

export async function LogIn(name, password, push, setLoading){
    try{
        const response = await axios.post("http://localhost:3000/api/login",{name: name, password: password});
        if(response){
            console.log("aqui está a responsta ", response.data);
            sessionStorage.setItem("animais", response.data.animais); //SALVA A LISTA DE ANIMAIS NA SEÇÃO
            push("/main");
        }
        else{
            console.log("erro com a requisição ", response);
        }
    }
    catch(err){
        console.log("erro na solicitação: ", err);
    }
    finally{
        setLoading(false);
    }
}