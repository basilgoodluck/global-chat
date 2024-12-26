import dotenv from "dotenv";

dotenv.config()

export const JWT_ACCESS_TOKEN = process.env.JWT_ACCESS_TOKEN || "token"
export const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_TOKEN || "token2"
export const MONGO_URL = process.env.MONGO_URL || "mongo url";
export const PORT = process.env.PORT || 5000
