import {Usuarios, Animais, Vacinas} from "@lib/models/modelsReferences";

import jwt from "jsonwebtoken";

export async function POST(request){

    const secretKey = process.env.SECRET_KEY;

    try{
        const{name,age, weight, vaccineList, token} = await request.json();

        const decoded = jwt.verify(token, secretKey);

        const userId = decoded.userId;

        const insertAnimal = await Animais.create({nome:name, peso:weight, usuarioId:userId});

        if(insertAnimal){
            for(const item of vaccineList){
                await Vacinas.create({data: item.vaccineDate, vacina: item.vaccineName, animalId: insertAnimal.id})
            }
        }

        return new Response(JSON.stringify({
            message: `os dados foram adicionados!`,
            animal: insertAnimal,
        }))
    }
    catch(err){
        return new Response(JSON.stringify({message:"deu tudo errado: ", err}))
    }
};