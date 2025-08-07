import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import type { Request, Response } from "express";
import { validationResult } from "express-validator";
import { generateJsonWebToken } from "../util/generateJsonWebToken.ts";

const prisma = new PrismaClient();

export const signup = async (req: Request, res: Response) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    generateJsonWebToken(user.id, user.username, res);

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.error("Error during signup:", error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    const isPasswordValid = user && bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    generateJsonWebToken(user.id, user.username, res);

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.error("Error during signup:", error);
  }
};

export const users = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();

  if (!users) {
    return res.status(404).json({ error: "No users found" });
  }

  res.status(200).json({ users });
};

export const user = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    return res.status(404).json({ error: "No user found" });
  }

  res.status(200).json({ user });
};

export const logout = (res: Response) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Loged out successfuly" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
    console.error("Error during logout:", error);
  }
};
