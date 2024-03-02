import Contact from "@/models/contact";
import connectDB from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    await connectDB();
    const reqBody = await request.json();

    //destructuring of request

    const { name, email, subject, message } = reqBody;

    const newForm = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newForm.save();

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
