import { Request, Response } from "express";
import { Ressource } from "../models/ressource.model.js";
import { idSchema } from "../schemas/id.schema.js";

// Endpoint: Get all ressources
export const listRessources = async(req: Request, res: Response) => {
    try {
        const ressources = await Ressource.findAll()

        res.status(200).json(ressources);
    } catch (error) {
        console.error("Error fetching ressources data : ", error)
        res.status(500).json({ error: "Failed to fetch ressources data."})
    }
}