import { Sequelize } from "sequelize";
import { Usuarios } from "./usuarios.js";
import { Animais } from "./animais.js";
import { Vacinas } from "./vacinas.js";

// Relacionamentos
Usuarios.hasMany(Animais, { foreignKey: "usuarioId", as: "animais" });
Animais.belongsTo(Usuarios, { foreignKey: "usuarioId", as: "usuario" });

Animais.hasMany(Vacinas, { foreignKey: "animalId", as: "vacinas" });
Vacinas.belongsTo(Animais, { foreignKey: "animalId", as: "animal" });

// Exportar modelos já relacionados
export { Usuarios, Animais, Vacinas };