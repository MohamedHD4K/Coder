import express from "express";
import {
  login,
  signup,
  users,
  user,
  logout,
} from "../controllers/auth.controller.ts";
import { loginValidation, registerValidation } from "../middleware/authValidation.ts";

const router = express.Router();

router.post("/signup", registerValidation , signup);

router.post("/login", loginValidation , login);

router.get("/users", users);

router.get("/user/:id", user);

router.post("/logout", logout);
export default router;
