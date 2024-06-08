import tryCatch from "@utils/tryCatch";
import express from "express";

const router = express.Router();

router.get(
  "/story",
  tryCatch(() => {}),
);

export default router;
