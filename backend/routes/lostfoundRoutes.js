import express from "express";
import { 
    getLostFound, 
    createLostFound, 
    updateLostFound, 
    deleteLostFound,
    archiveLostFound,
    restoreLostFound,
    getArchivedLostFound
} from "../controllers/lostfoundController.js";

const router = express.Router();

router.get("/", getLostFound);
router.post("/", createLostFound);
router.put("/:id", updateLostFound);
router.get("/archived", getArchivedLostFound);
router.patch("/:id/archive", archiveLostFound);
router.patch("/:id/restore", restoreLostFound);
router.delete("/:id", deleteLostFound);

export default router;