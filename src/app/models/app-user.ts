import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize.js";
import { AppUserAttributes, AppUserCreationAttributes } from "../@types/AppUser.interface.js";

export class AppUser extends Model<AppUserAttributes, AppUserCreationAttributes> implements AppUserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public role!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

AppUser.init(
	{
		username: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		email: {
			type: DataTypes.TEXT,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		role: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: "user",
		}
	},
	{
		sequelize,
		tableName: "app_user",
	},
);