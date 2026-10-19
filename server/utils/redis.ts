import { Redis } from "ioredis";
require("dotenv").config();

const redisClient = () => {
    if (process.env.REDIS_URL) {
        return process.env.REDIS_URL;
    }

    throw new Error("Redis connection failed: REDIS_URL is missing");
};

export const redis = new Redis(redisClient());

// Check the actual Redis connection status
redis.on("connect", () => {
    console.log("Redis connection established");
});

redis.on("ready", () => {
    console.log("Redis is ready to accept commands");
});

redis.on("error", (error) => {
    console.error("Redis error:", error.message);
});

redis.on("close", () => {
    console.log("Redis connection closed");
});
