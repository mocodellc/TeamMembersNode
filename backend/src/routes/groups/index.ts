import { Router } from "express";
import { getGroups } from "./handlers/getGroups.js";
import { createGroup } from "./handlers/createGroup.js";
import { updateGroup } from "./handlers/updateGroup.js";
import { deleteGroup } from "./handlers/deleteGroup.js";

const router = Router();

// Routes for the collection: /api/groups
router.get("/", getGroups);
router.post("/", createGroup);

// Routes for specific group: /api/groups/:teamGroupId
router.put("/:id", updateGroup);
router.delete("/:id", deleteGroup);

export default router;
