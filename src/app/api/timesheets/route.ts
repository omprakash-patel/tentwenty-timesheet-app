import { NextResponse } from "next/server";

import { timesheets } from "@/data/timesheets";

export async function GET() {
  return NextResponse.json({
    success: true,

    data: timesheets,
  });
}