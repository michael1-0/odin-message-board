import { Router } from "express";
import {
  getRoot,
  getForm,
  postForm,
  getMessageById,
} from "../controllers/definitelyNotController.js";

const definitelyNotRouter = Router();

definitelyNotRouter.get("/", getRoot);

definitelyNotRouter.get("/new", getForm);
definitelyNotRouter.post("/new", postForm);
definitelyNotRouter.get("/message/:id", getMessageById);

export { definitelyNotRouter };
