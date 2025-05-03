import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config(); 

console.log({
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
  });

export const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: "postgres",
        port: process.env.DB_PORT,
        dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false
            }
          }
});

sequelize.authenticate()
.then(()=>{
  console.log("conectado ao banco de dados")
}).catch((err)=>{
  console.log("erro ao conectar: " + err)
})