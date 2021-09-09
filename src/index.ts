import express from "express";
import swaggerIU from "swagger-ui-express";

import swaggerFile from "../swagger.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerIU.serve, swaggerIU.setup(swaggerFile));

app.use("/users", usersRoutes);

export { app };
