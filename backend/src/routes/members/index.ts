import { Router } from "express";
import { getMembers } from "./handlers/getMembers.js";
import { createMember } from "./handlers/createMember.js";
import { updateMember } from "./handlers/updateMember.js";
import { deleteMember } from "./handlers/deleteMember.js";
import { undeleteMember } from "./handlers/undeleteMember.js";

const router = Router();

// Routes for the collection: /api/members
router.get("/", getMembers);
router.post("/", createMember);

// Routes for specific member: /api/members/:teamMemberId
router.put("/:id", updateMember);
router.patch("/:id/delete", deleteMember);
router.patch("/:id/undelete", undeleteMember);

export default router;
