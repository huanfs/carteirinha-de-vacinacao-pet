import {DataTypes} from "sequelize";

import {sequelize} from "@lib/db";

export const Vacinas = sequelize.define("vacinas",{
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    data:{
        type: DataTypes.DATEONLY,
        allowNull:false,
    },
    vacina:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    animalId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: "animais",
            key: "id",
        },
    },
});

sequelize.sync()
.then(()=>{
    console.log("Tabela vacinas sincronizada com sucesso")
})
.catch((err)=>{
    console.log("Erro ao sincronizar/criar vacinas: " + err)
})