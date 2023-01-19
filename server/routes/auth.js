import express  from "express";
import {login} from "../controllers/auth.js"

const router = express.Router()

router.route("/login",login)

export default router