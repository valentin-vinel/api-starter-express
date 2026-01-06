import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize.js";

export class Ressource extends Model {}

Ressource.init(
    {
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
		sequelize,
		tableName: "ressource",
		schema: "public",
	},
)