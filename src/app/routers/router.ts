import { Router } from "express";
import * as appUserController from "../controllers/app-user.controller.js";
import * as projectController from "../controllers/project.controller.js";
import * as authController from "../controllers/auth.controller.js";

export const router = Router();

router.get('/users', appUserController.listUsers);
router.get('/users/:id', appUserController.getOneUser);

router.get('/ressources', projectController.listProjects);
router.get('/ressources/:id', projectController.getOneProject);
router.post('/ressources', projectController.createOneProject);
router.patch('/ressources/:id', projectController.updateOneProjectById);
router.delete('/ressources/:id', projectController.deleteOneProjectById);

router.post('/login', authController.login);
router.post('/register', authController.register)