import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";
import bcrypt from "bcryptjs"; // Import the encryption helper

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing required profile fields (email/password)." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    const usersCollection = db.collection("users");

    const userExists = await usersCollection.findOne({ email: email.toLowerCase() });
    if (userExists) {
      return NextResponse.json(
        { error: "An account utilizing this email address already exists." },
        { status: 409 }
      );
    }

    // 🔥 ENCRYPT PASSWORD HERE: Generating salt bounds with 12 rounds
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = {
      name: name || "New Developer",
      email: email.toLowerCase(),
      password: hashedPassword, // The secure hash is now targeted for database insertion
      emailVerified: null,
      createdAt: new Date(),
    };

    const result = await usersCollection.insertOne(newUser);

    return NextResponse.json(
      { message: "User profile established successfully!", userId: result.insertedId },
      { status: 201 }
    );

  } catch (error: unknown) {
    console.error("CRITICAL REGISTER API ERROR:", error);
    return NextResponse.json({ error: "An internal platform schema failure occurred." }, { status: 500 });
  }
}
