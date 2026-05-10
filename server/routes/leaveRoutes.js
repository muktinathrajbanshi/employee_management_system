import { Router } from "express";
import { protect, protectAdmin } from "../middleware/auth";
import { createLeave, getLeaves, updateLeaveStatus } from "../controllers/leaveController";

const leaveRouter = Router();

leaveRouter.post("/", protect, createLeave)
leaveRouter.post("/", protect, getLeaves)
leaveRouter.post("/:id", protect, protectAdmin, updateLeaveStatus)


export default leaveRouter;