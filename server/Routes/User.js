import express from "express";
   
const router = express.Router();

import {login,sendOTP} from "../controllers/Auth.js"

router.post("/login", login)
router.post("/sendotp", sendOTP)

export default router;