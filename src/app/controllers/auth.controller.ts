import { AppUser } from "../models/app-user.model.js";
import { appUserSchema } from "../schemas/app-user.schema.js";
import { loginSchema } from "../schemas/login.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";