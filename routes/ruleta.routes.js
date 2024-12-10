import express from 'express';
import ruletaController from "../controllers/ruleta.controller.js"

const router = express.Router();

router.post("/ruleta", ruletaController.createRuleta);
router.put("/ruleta/:id", ruletaController.updateRuleta);

export default router;