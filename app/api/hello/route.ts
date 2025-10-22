import { NextResponse } from "next/server";

// GET request handler
export async function GET() {
  return NextResponse.json({
    message: "Hello from Next App Template API!",
    timestamp: new Date().toISOString(),
    status: "success",
  });
}

// POST request handler example
export async function POST(request: Request) {
  try {
    const body = await request.json();

    return NextResponse.json({
      message: "Data received successfully",
      data: body,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
