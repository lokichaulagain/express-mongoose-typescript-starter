import { Express, Request, Response } from "express";
import mongooseUsersRouter from "../controllers/user.controller";

const routerSetup = (app: Express) =>
  app

    .get("/", async (req: Request, res: Response) => {
      res.send("Hello Express APIvantage!");
    })
    .use("/api/users", mongooseUsersRouter);

export default routerSetup;
