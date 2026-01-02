import { sequelize } from "../config/sequelize.js";

(async () => {
	console.log("Syncing database");
	await sequelize.sync({ force: true });

	await sequelize.close();

	console.log("\n✅ Database synced\n");
})();