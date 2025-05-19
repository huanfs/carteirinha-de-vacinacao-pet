import {Usuarios, Animais} from "@lib/models/modelsReferences";

import jwt from "jsonwebtoken";

export async function POST(request){

    const secretKey = process.env.SECRET_KEY;

    try{
        const {name, password} = await request.json();
        const auth = await Usuarios.findOne({
            where:{nome: name, senha: password},
            include: [{ model: Animais , as: "animais"}],
        });
        if(auth){

            const token = jwt.sign({userId: auth.id}, secretKey, {expiresIn: '1h'})

            return new Response(
                JSON.stringify({message:`Usuário foi encontrado no banco de dados`, animais:auth.animais || [], token}),{
                    status:200,
                    headers:{
                        "Content-Type":"application/json",
                    }
                }
            )
        }
        if(!auth){
            return new Response(
                JSON.stringify({message:`Usuário não foi encontrado`}),{
                    status:400,
                    headers:{
                        "Content-Type":"application/json",
                    }
                }
            )
        }
    }
    catch(err){
        return new Response(
            JSON.stringify({message:`Erro na api: ${err}`})
        )
    }
}