import express from "express";
import { AuthMiddleWare } from "./middleware";
import { prismaClient } from "db";
import type { responseFormat } from "./types/types";

const app = express();
app.use(express.json());

app.post("/api/v1/website", AuthMiddleWare, async (req, res) => {
  try {
    const userId = req.userId!;
    const data = await prismaClient.website.create({
      data: {
        url: "https://example.com",
        userId: userId,
      },
    });

    const response: responseFormat = {
      success: true,
      data: data,
      error: undefined,
    };
    res.send(response);
  } catch (error) {
    const response: responseFormat = {
      success: false,
      data: undefined,
      error: (error as Error).message,
    };
    res.send(response);
  }
});
app.get("/api/v1/website/status", AuthMiddleWare, async (req, res) => {
  try {
    const websiteId = req.body.websiteId;
    const userId = req.userId!;
    const data = await prismaClient.website.findFirst({
      where: {
        id: websiteId as string,
        userId: userId,
        disabled: false,
      },
      include: {
        ticks: true,
      },
    });
    const response: responseFormat = {
      success: true,
      data: data,
      error: undefined,
    };
    res.send(response);
  } catch (error) {
    const response: responseFormat = {
      success: false,
      data: undefined,
      error: (error as Error).message,
    };
    res.send(response);
  }
});
app.get("/api/v1/websites", AuthMiddleWare, async (req, res) => {
  try {
    const userId = req.userId!;
    const data = await prismaClient.website.findMany({
      where: {
        userId: userId,
        disabled: false,
      },
      include: {
        ticks: true,
      },
    });
    const response: responseFormat = {
      success: true,
      data: data,
      error: undefined,
    };
    res.send(response);
  } catch (error) {
    const response: responseFormat = {
      success: false,
      data: undefined,
      error: (error as Error).message,
    };
    res.send(response);
  }
});
app.delete("/api/v1/website", AuthMiddleWare, async (req, res) => {
  try {
    const websiteId = req.body.websiteId;
    const userId = req.userId!;
    const data = await prismaClient.website.update({
      where: {
        id: websiteId as string,
        userId: userId,
        disabled: false,
      },
      data: {
        disabled: true,
      },
    });
    const response: responseFormat = {
      success: true,
      data: data,
      error: undefined,
    };
    res.send(response);
  } catch (error) {
    const response: responseFormat = {
      success: false,
      data: undefined,
      error: (error as Error).message,
    };
    res.send(response);
  }
});

app.listen(3000);
