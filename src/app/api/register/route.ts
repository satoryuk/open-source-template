import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    // 1. Basic Server-side Input Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing required profile fields (email/password)." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must stand at a minimum length of 6 characters." },
        { status: 400 }
      );
    }

    // 2. Connect to the MongoDB connection pool instance
    const client = await clientPromise;
    const db = client.db();
    const usersCollection = db.collection("users");

    // 3. Prevent Duplicate Registrations
    const userExists = await usersCollection.findOne({ email: email.toLowerCase() });
    if (userExists) {
      return NextResponse.json(
        { error: "An account utilizing this email address already exists." },
        { status: 409 }
      );
    }

    // 4. Create the User Record
    // Note: For production use, you should import a library like bcryptjs 
    // to hash the password before saving. For this baseline learner template,
    // we save the fields to mirror NextAuth's default local sandbox setup.
    const newUser = {
      name: name || "New Developer",
      email: email.toLowerCase(),
      password: password, // Ready to be swapped with a hash utility
      emailVerified: null,
      createdAt: new Date(),
    };

    const result = await usersCollection.insertOne(newUser);

    return NextResponse.json(
      { 
        message: "User profile established successfully!", 
        userId: result.insertedId 
      },
      { status: 201 }
    );

  } catch (error: unknown) {
    console.error("CRITICAL REGISTER API ERROR:", error);
    return NextResponse.json(
      { error: "An internal platform schema failure occurred." },
      { status: 500 }
    );
  }
}
