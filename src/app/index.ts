import "dotenv/config";
import express, { Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import { router } from "./routers/router.js";

const app = express();
const port = process.env.PORT || 3000;

const corsOptions: CorsOptions = {
	origin: [
		`http://localhost:3001`,
	],
	methods: ["GET", "POST", "PATCH", "DELETE"],
	credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.send("Welcome to the API-Starter !");
});

app.use(router);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});