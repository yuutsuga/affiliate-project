import { config } from "dotenv";
config();

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error('A variável JWT_SECRET não está definida na .env');
}

export { JWT_SECRET };