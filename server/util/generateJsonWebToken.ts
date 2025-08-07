import express from "express";
import jwt from "jsonwebtoken";

type Response = express.Response;

export const generateJsonWebToken = (id: string, username: string , res : Response): string => {
  const secretKey = process.env.JWT_SECRET || "your_secret_key";

  const payload = {
    username,
    id,
  };

  const token = jwt.sign(payload, secretKey, {
    expiresIn: "30d", // Token expiration time
    algorithm: "HS256", // Algorithm used to sign the token
  });

  res.cookie("token", token, {
    httpOnly: true, // Prevents client-side JavaScript from accessing the token
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    sameSite: "lax", // Helps prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // Token expiration time in milliseconds
  })

  return token;
};
