import express from "express";
import { connectSSE } from "../services/notification.js";
import { testNotification } from "../controllers/notificationController.js";

const router = express.Router();

router.get("/stream", connectSSE);
router.post("/test", testNotification);

export default router;
