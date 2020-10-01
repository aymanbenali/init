import { Router } from "express";
import * as ctrl from "./controller";

var router = Router();

// const { addAsync } = require("@awaitjs/express");

// const routes = addAsync(new Router());

router.get("/", ctrl.funct1);
router.get("/test2", ctrl.funct2);

export default router;
