import { Optional } from "sequelize";

export interface RessourceAttributes {
  id?: number;
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface RessourceCreationAttributes extends Optional<RessourceAttributes, "id" | "createdAt" | "updatedAt"> {}