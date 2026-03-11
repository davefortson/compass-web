import { NextRequest, NextResponse } from "next/server";
import { createLead } from "../../../lib/notion";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, organization, orgType, challenge } =
      body;

    await createLead({
      firstName,
      lastName,
      email,
      organization,
      orgType,
      challenge,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission failed:", error);
    return NextResponse.json(
      { error: "Failed to submit" },
      { status: 500 }
    );
  }
}
