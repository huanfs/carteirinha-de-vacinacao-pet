"use client";

import axios from "axios";

export async function CreateNewUser(name, password, push, setLoading){

    try{
        const response = await axios.post("http://localhost:3000/api/register",{name: name, password: password});
        if(response.status === 200){
            console.log("aqui está a resposta da requisição: " , response.data);
            //push("/main");
        }
        else if(response.status === 201){
            console.log("Usuário já existe!", response.data);
        }
        else{
            console.log("houve um erro inesperado: ", response.data);
        }
    }
    catch(err){
        console.log("houve um erro na requisição: ", err)
    }
    finally{
        setLoading(false);
    }
};

