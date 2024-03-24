import cors from "cors";
import express, { Express } from "express";
import helmet from "helmet";
import api from "./api";
import { MessageResponse } from "./interfaces/message-response";
import { errorHandler } from "./middlewares/error-handler";
import { notFound } from "./middlewares/not-found";

const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>("/", (req, res) => {
  res.json({ message: "OK" });
});

app.use("/api/", api);
app.use(notFound);
app.use(errorHandler);

export default app;
