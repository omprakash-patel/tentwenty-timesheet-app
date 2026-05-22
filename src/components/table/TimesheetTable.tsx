"use client";

import { getTimesheets } from "@/services/timesheet.service";
import { Timesheet } from "@/types/timesheet";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function TimesheetTable() {
  const [timesheets, setTimesheets] =
    useState<Timesheet[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  // FILTER STATES
  const [statusFilter, setStatusFilter] =
    useState("");

  const [dateFilter, setDateFilter] =
    useState("");

  // FETCH DATA
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
        } catch (err) {
          setError(
            "Failed to load timesheets"
          );
        } finally {
          setLoading(false);
        }
      };

    fetchTimesheets();
  }, []);

  // FILTERED DATA
  const filteredTimesheets =
    useMemo(() => {
      return timesheets.filter(
        (item) => {
          const statusMatch =
            statusFilter === ""
              ? true
              : item.status ===
                statusFilter;

          const dateMatch =
            dateFilter === ""
              ? true
              : item.dateRange ===
                dateFilter;

          return (
            statusMatch &&
            dateMatch
          );
        }
      );
    }, [
      timesheets,
      statusFilter,
      dateFilter,
    ]);

  // UNIQUE DATES
  const uniqueDates =
    useMemo(() => {
      return [
        ...new Set(
          timesheets.map(
            (item) =>
              item.dateRange
          )
        ),
      ];
    }, [timesheets]);

  // STATUS STYLE
  const getStatusStyle = (
    status: string
  ) => {
    switch (
      status.toLowerCase()
    ) {
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

  // LOADER
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  // ERROR
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5]">
        <div className="rounded-xl bg-white px-8 py-6 shadow">
          <p className="text-sm text-red-500">
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* CONTENT */}
      <div className="mx-auto max-w-6xl p-6">
        <div className="rounded-2xl border border-[#ececec] bg-white p-6 shadow-sm">
          {/* HEADER */}
          <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#1d1d1f]">
                Your Timesheets
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Manage and track
                weekly work logs
              </p>
            </div>

          </div>

          {/* FILTERS */}
          <div className="mb-6 flex flex-col gap-3 md:flex-row">
            {/* DATE FILTER */}
            <select
              value={dateFilter}
              onChange={(e) =>
                setDateFilter(
                  e.target.value
                )
              }
              className="h-11 rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-blue-500"
            >
              <option value="">
                All Dates
              </option>

              {uniqueDates.map(
                (date) => (
                  <option
                    key={date}
                    value={date}
                  >
                    {date}
                  </option>
                )
              )}
            </select>

            {/* STATUS FILTER */}
            <select
              value={
                statusFilter
              }
              onChange={(e) =>
                setStatusFilter(
                  e.target.value
                )
              }
              className="h-11 rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-blue-500"
            >
              <option value="">
                All Status
              </option>

              <option value="Completed">
                Completed
              </option>

              <option value="Incomplete">
                Incomplete
              </option>

              <option value="Missing">
                Missing
              </option>
            </select>

            {/* RESET */}
            <button
              onClick={() => {
                setDateFilter("");
                setStatusFilter(
                  ""
                );
              }}
              className="h-11 rounded-xl border border-gray-300 px-4 text-sm font-medium transition hover:bg-gray-100"
            >
              Reset Filters
            </button>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto rounded-2xl border border-[#ececec]">
            <table className="w-full min-w-[700px]">
              {/* HEAD */}
              <thead className="bg-[#fafafa]">
                <tr className="border-b border-[#ececec]">
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

              {/* BODY */}
              <tbody>
                {filteredTimesheets.length >
                0 ? (
                  filteredTimesheets.map(
                    (item) => (
                      <tr
                        key={
                          item.id
                        }
                        className="border-b border-[#ececec] transition hover:bg-[#fafafa]"
                      >
                        {/* WEEK */}
                        <td className="p-4 text-sm font-medium text-[#1d1d1f]">
                          Week{" "}
                          {
                            item.weekNumber
                          }
                        </td>

                        {/* DATE */}
                        <td className="p-4 text-sm text-gray-500">
                          {
                            item.dateRange
                          }
                        </td>

                        {/* STATUS */}
                        <td className="p-4">
                          <span
                            className={`rounded-md px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${getStatusStyle(
                              item.status
                            )}`}
                          >
                            {
                              item.status
                            }
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
                    )
                  )
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="p-10 text-center text-sm text-gray-500"
                    >
                      No
                      timesheets
                      found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* FOOTER */}
          <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              Showing{" "}
              {
                filteredTimesheets.length
              }{" "}
              of{" "}
              {
                timesheets.length
              }{" "}
              timesheets
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <button className="rounded-lg border px-3 py-1.5 transition hover:bg-gray-100">
                Previous
              </button>

              <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-white">
                1
              </button>

              <button className="rounded-lg border px-3 py-1.5 transition hover:bg-gray-100">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}