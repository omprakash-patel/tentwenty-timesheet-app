"use client";
import { getTimesheets } from "@/services/timesheet.service";
import { Timesheet } from "@/types/timesheet";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TimesheetTable() {
  const [open, setOpen] = useState(false);
  const [timesheets, setTimesheets] =
  useState<Timesheet[]>([]);

const [loading, setLoading] =
  useState(true);

const [error, setError] =
  useState("");
useEffect(() => {
  const fetchTimesheets =
    async () => {
      try {
        setLoading(true);

        const response =
          await getTimesheets();

        setTimesheets(
          response.data
        );
      } catch (error) {
        setError(
          "Failed to load timesheets"
        );
      } finally {
        setLoading(false);
      }
    };

  fetchTimesheets();
}, []);
  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-700";

      case "incomplete":
        return "bg-yellow-100 text-yellow-700";

      case "missing":
        return "bg-pink-100 text-pink-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };
if (loading) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
    </div>
  );
}
if (error) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-red-500">
        {error}
      </p>
    </div>
  );
}
  return (
    <div className="min-h-screen bg-[#f5f5f5]">

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl p-6">
        {/* CARD */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          {/* HEADER */}
          <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h2 className="text-2xl font-bold text-black">
              Your Timesheets
            </h2>

            <button
              onClick={() => setOpen(true)}
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Add Timesheet
            </button>
          </div>

          {/* FILTERS */}
          <div className="mb-6 flex flex-col gap-3 md:flex-row">
            <select className="h-10 rounded-lg border border-gray-300 px-3 text-sm outline-none">
              <option>Date Range</option>
            </select>

            <select className="h-10 rounded-lg border border-gray-300 px-3 text-sm outline-none">
              <option>Status</option>
            </select>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full min-w-[700px]">
              <thead className="bg-[#fafafa]">
                <tr className="border-b">
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Week #
                  </th>

                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Date
                  </th>

                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Status
                  </th>

                  <th className="p-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>

             <tbody>
  {timesheets.map((item) => (
    <tr
      key={item.id}
      className="border-b border-[#ececec] transition hover:bg-[#fafafa]"
    >
      {/* WEEK */}
      <td className="p-4 text-sm font-medium text-[#1d1d1f]">
        {item.weekNumber}
      </td>

      {/* DATE */}
      <td className="p-4 text-sm text-gray-500">
        {item.dateRange}
      </td>

      {/* STATUS */}
      <td className="p-4">
        <span
          className={`rounded px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ${getStatusStyle(
            item.status
          )}`}
        >
          {item.status}
        </span>
      </td>

      {/* ACTION */}
      <td className="p-4 text-right">
        <Link
          href={`/dashboard/${item.id}`}
          className="text-sm font-medium text-[#3b82f6] transition hover:text-blue-700"
        >
          {item.status ===
          "Missing"
            ? "Create"
            : item.status ===
              "Incomplete"
            ? "Update"
            : "View"}
        </Link>
      </td>
    </tr>
  ))}
</tbody>
            </table>
          </div>

          {/* FOOTER */}
          <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
            <select className="h-9 rounded-md border border-gray-300 px-3 text-sm">
              <option>5 per page</option>
            </select>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <button className="rounded border px-3 py-1 hover:bg-gray-100">
                Previous
              </button>

              <button className="rounded bg-blue-600 px-3 py-1 text-white">
                1
              </button>

              <button className="rounded border px-3 py-1 hover:bg-gray-100">
                2
              </button>

              <button className="rounded border px-3 py-1 hover:bg-gray-100">
                3
              </button>

              <button className="rounded border px-3 py-1 hover:bg-gray-100">
                Next
              </button>
            </div>
          </div>
        </div>

       
      </div>

      {/* <TimesheetModa open={open} setOpen={setOpen} /> */}
    </div>
  );
}