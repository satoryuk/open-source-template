/* eslint-disable @typescript-eslint/no-require-imports */
const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");

require("dotenv").config();
if (fs.existsSync(path.resolve(process.cwd(), ".env.local"))) {
  require("dotenv").config({ path: path.resolve(process.cwd(), ".env.local"), override: true });
}

if (!process.env.MONGODB_URI) {
  console.error("Error: MONGODB_URI environment variable missing from process scope.");
  process.exit(1);
}

async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    console.log("Connecting to MongoDB Instance...");
    await client.connect();
    
    const db = client.db();
    const usersCollection = db.collection("users");

    const demoUser = {
      name: "Demo Developer",
      email: "admin@template.com",
      password: "password123", 
      emailVerified: null,
      createdAt: new Date(),
    };

    console.log("Checking if target baseline seed data exists...");
    const existing = await usersCollection.findOne({ email: demoUser.email });

    if (!existing) {
      await usersCollection.insertOne(demoUser);
      console.log("\n=============================================");
      console.log("🎉 Database initialized successfully!");
      console.log(`👤 User: ${demoUser.email}`);
      console.log(`🔑 Password: ${demoUser.password}`);
      console.log("=============================================\n");
    } else {
      console.log("Base user 'admin@template.com' is already registered in this database collection.");
    }

  } catch (error) {
    console.error("Error running database configuration seed:", error);
  } finally {
    await client.close();
    console.log("Connection securely closed.");
  }
}

run();
