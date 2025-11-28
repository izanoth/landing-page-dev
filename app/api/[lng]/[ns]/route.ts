// app/api/i18n/[lng]/[ns]/route.ts

import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(
  req: NextRequest,
  { params }: { params: { lng: string; ns: string } }
) {
  const { lng, ns } = params;

  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "locales",
      lng,
      `${ns}.json`
    );

    const json = await fs.readFile(filePath, "utf8");

    return new NextResponse(json, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return NextResponse.json(
      {
        error: "Translation not found",
        details: String(err),
        fileTried: `${lng}/${ns}.json`,
      },
      { status: 404 }
    );
  }
}
