"use client";

import { useMemo, useState } from "react";
import TimesheetModal from "../modals/TimesheetModal";
import type { Timesheet } from "@/types/timesheet";
// import { MoreVertical } from "lucide-react";

interface Props {
  data: Timesheet;
}

export default function WeekTimesheetView({
  data,
}: Props) {
  const [activeMenu, setActiveMenu] =
  useState<number | null>(null);
 const [open, setOpen] = useState(false);
 const [selectedDayId, setSelectedDayId] = useState<number | null>(null);
 const [editData, setEditData] =useState<any>(null);
 const [weekData, setWeekData] =useState(data);

  // TOTAL HOURS
  const totalHours = useMemo(() => {
    return weekData.days.reduce(
      (total, day) =>
        total +
        day.tasks.reduce(
          (sum, task) =>
            sum + task.hours,
          0
        ),
      0
    );
  }, [weekData]);

  // PROGRESS
  const progress =
    (totalHours /
      weekData.expectedHours) *
    100;

  // ADD / EDIT TASK
  const handleSave = (
    formData: any
  ) => {
    // EDIT
    if (editData) {
      setWeekData((prev) => ({
        ...prev,

        days: prev.days.map(
          (day) => ({
            ...day,

            tasks: day.tasks.map(
              (task) =>
                task.id ===
                editData.id
                  ? {
                      ...task,

                      ...formData,
                    }
                  : task
            ),
          })
        ),
      }));

      setOpen(false);

      return;
    }

    // ADD
    setWeekData((prev) => ({
      ...prev,

      days: prev.days.map(
        (day) =>
          day.id ===
          selectedDayId
            ? {
                ...day,

                tasks: [
                  ...day.tasks,

                  {
                    id: Date.now(),

                    title:
                      formData.title,

                    project:
                      formData.project,

                    hours:
                      Number(
                        formData.hours
                      ),

                    type:
                      formData.type,

                    description:
                      formData.description,
                  },
                ],
              }
            : day
      ),
    }));

    setOpen(false);
  };

  // DELETE TASK
  const deleteTask = (
    taskId: number
  ) => {
    setWeekData((prev) => ({
      ...prev,

      days: prev.days.map(
        (day) => ({
          ...day,

          tasks: day.tasks.filter(
            (task) =>
              task.id !== taskId
          ),
        })
      ),
    }));
  };

  return (
    <>
      <div className="min-h-screen bg-[#f5f5f7]">
        {/* NAVBAR */}
     

        {/* CONTENT */}
        <div className="mx-auto max-w-7xl p-6">
          <div className="rounded-2xl border border-[#ececec] bg-white p-8">
            {/* TOP */}
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-[32px] font-bold text-[#1d1d1f]">
                  This week’s timesheet
                </h2>

                <p className="mt-3 text-sm text-gray-500">
                  {
                    weekData.dateRange
                  }
                </p>
              </div>

              {/* PROGRESS */}
              <div className="w-full max-w-[240px]">
                <div className="mb-2 flex items-center justify-between text-xs text-gray-500">
                  <span>
                    {totalHours}/
                    {
                      weekData.expectedHours
                    }{" "}
                    hrs
                  </span>

                  <span>
                    {Math.round(
                      progress
                    )}
                    %
                  </span>
                </div>

                <div className="h-[4px] overflow-hidden rounded-full bg-[#ececec]">
                  <div
                    style={{
                      width: `${progress}%`,
                    }}
                    className="h-full bg-[#ff8a4c]"
                  />
                </div>
              </div>
            </div>

            {/* DAYS */}
            <div className="space-y-10">
              {weekData.days.map(
                (day) => (
                  <div
                    key={day.id}
                    className="grid grid-cols-1 gap-5 md:grid-cols-[80px_1fr]"
                  >
                    {/* DATE */}
                    <div className="pt-3 text-sm font-semibold text-[#1d1d1f]">
                      {day.date}
                    </div>

                    {/* TASKS */}
                    <div className="space-y-3">
                      {day.tasks.map(
                        (task) => (
                          <div
                            key={
                              task.id
                            }
                            className="flex flex-col gap-4 rounded-lg border border-[#ececec] px-4 py-3 md:flex-row md:items-center"
                          >
                            {/* TITLE */}
                            <div className="flex-1">
                              <p className="text-sm font-medium text-[#1d1d1f]">
                                {
                                  task.title
                                }
                              </p>
                            </div>

                            {/* HOURS */}
                            <div className="text-xs text-gray-400">
                              {
                                task.hours
                              }{" "}
                              hrs
                            </div>

                            {/* PROJECT */}
                            <div className="rounded bg-[#eef4ff] px-2 py-1 text-[10px] font-medium text-[#3b82f6]">
                              {
                                task.project
                              }
                            </div>

                            {/* ACTIONS */}
                            <div className="relative">
  {/* MENU BUTTON */}
  <button
    onClick={() =>
      setActiveMenu(
        activeMenu === task.id
          ? null
          : task.id
      )
    }
    className="flex h-9 w-9 items-center justify-center rounded-lg transition hover:bg-[#f5f5f5]"
  >
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="18"
  height="18"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="text-gray-500"
>
  <circle cx="12" cy="5" r="1" />
  <circle cx="12" cy="12" r="1" />
  <circle cx="12" cy="19" r="1" />
</svg>
  </button>

  {/* POPOVER */}
  {activeMenu === task.id && (
    <div className="absolute right-0 top-11 z-20 w-36 overflow-hidden rounded-xl border border-[#ececec] bg-white shadow-lg">
      {/* EDIT */}
      <button
        onClick={() => {
          setEditData(task);

          setOpen(true);

          setActiveMenu(null);
        }}
        className="flex w-full items-center px-4 py-3 text-left text-sm text-gray-700 transition hover:bg-[#f8f8f8]"
      >
        Edit Task
      </button>

      {/* DELETE */}
      <button
        onClick={() => {
          deleteTask(task.id);

          setActiveMenu(null);
        }}
        className="flex w-full items-center px-4 py-3 text-left text-sm text-red-500 transition hover:bg-red-50"
      >
        Delete Task
      </button>
    </div>
  )}
</div>
                          </div>
                        )
                      )}

                      {/* ADD TASK */}
                      <button
                        onClick={() => {
                          setSelectedDayId(
                            day.id
                          );

                          setEditData(
                            null
                          );

                          setOpen(true);
                        }}
                        className="flex h-11 w-full items-center justify-center rounded-lg border border-dashed border-[#c9d7ff] text-sm font-medium text-[#3b82f6] transition hover:bg-[#f5f9ff]"
                      >
                        + Add new task
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <TimesheetModal
        open={open}
        setOpen={setOpen}
        editData={editData}
        onSave={handleSave}
      />
    </>
  );
}