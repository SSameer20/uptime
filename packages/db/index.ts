// lib/prisma.ts
import { PrismaClient } from "./generated/prisma/client";

export const prismaClient = new PrismaClient({ accelerateUrl: "" });
