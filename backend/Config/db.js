const dns = require("node:dns");
const mongoose = require("mongoose");

const configureAtlasDns = async (mongoUri) => {
  if (!mongoUri.startsWith("mongodb+srv://")) return;

  const hostname = new URL(mongoUri).hostname;

  try {
    await dns.promises.resolveSrv(`_mongodb._tcp.${hostname}`);
  } catch (error) {
    if (error.code !== "ECONNREFUSED") throw error;

    dns.setServers(["8.8.8.8", "1.1.1.1"]);
    console.warn("Local DNS refused the Atlas SRV query; using public DNS.");
  }
};

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not configured.");
  }

  try {
    await configureAtlasDns(process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

module.exports = connectDB;



