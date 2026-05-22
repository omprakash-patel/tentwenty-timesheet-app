import { NextResponse } from "next/server";

import { timesheets } from "@/data/timesheets";

export async function GET(
  request: Request,

  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    const { id } =
      await params;

    const timesheet =
      timesheets.find(
        (item) =>
          item.id === Number(id)
      );

    if (!timesheet) {
      return NextResponse.json(
        {
          success: false,

          message:
            "Timesheet not found",
        },

        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,

      data: timesheet,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,

        message:
          "Something went wrong",
      },

      {
        status: 500,
      }
    );
  }
}