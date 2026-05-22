"use client";

import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;

  onSave: (data: any) => void;

  editData?: any;
}

export default function TimesheetModal({
  open,
  setOpen,
  onSave,
  editData,
}: Props) {
  const [project, setProject] =
    useState("");

  const [type, setType] =
    useState("Bug fixes");

  const [description, setDescription] =
    useState("");

  const [hours, setHours] =
    useState(1);

  const [error, setError] =
    useState("");

  useEffect(() => {
    if (editData) {
      setProject(editData.project);

      setType(editData.type);

      setDescription(
        editData.description
      );

      setHours(editData.hours);
    }
  }, [editData]);

  if (!open) return null;

  const handleSubmit = () => {
    setError("");

    if (
      !project ||
      !type ||
      !description
    ) {
      setError(
        "Please fill all required fields"
      );

      return;
    }

   onSave({
  id:
    editData?.id ||
    Date.now(),

  title: description,

  project,

  type,

  description,

  hours,
});

    setOpen(false);

    setProject("");
    setType("Bug fixes");
    setDescription("");
    setHours(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f2937]/70 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b px-6 py-5">
          <h2 className="text-2xl font-bold">
            {editData
              ? "Edit Entry"
              : "Add New Entry"}
          </h2>

          <button
            onClick={() =>
              setOpen(false)
            }
            className="text-2xl text-gray-400 transition hover:text-black"
          >
            ×
          </button>
        </div>

        {/* BODY */}
        <div className="space-y-6 p-6">
          {/* PROJECT */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Select Project *
            </label>

            <select
              value={project}
              onChange={(e) =>
                setProject(
                  e.target.value
                )
              }
              className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-blue-500"
            >
              <option value="">
                Project Name
              </option>

              <option>
                Website Redesign
              </option>

              <option>
                Dashboard UI
              </option>

              <option>
                Mobile App
              </option>
            </select>
          </div>

          {/* TYPE */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Type of Work *
            </label>

            <select
              value={type}
              onChange={(e) =>
                setType(
                  e.target.value
                )
              }
              className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-blue-500"
            >
              <option>
                Bug fixes
              </option>

              <option>
                Development
              </option>

              <option>
                Meeting
              </option>

              <option>
                Research
              </option>
            </select>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Task description *
            </label>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              placeholder="Write text here ..."
              rows={5}
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500"
            />

            <p className="mt-2 text-xs text-gray-400">
              A note for extra info
            </p>
          </div>

          {/* HOURS */}
          <div>
            <label className="mb-3 block text-sm font-medium">
              Hours *
            </label>

            <div className="flex w-fit items-center overflow-hidden rounded-xl border">
              <button
                onClick={() =>
                  setHours((prev) =>
                    prev > 1
                      ? prev - 1
                      : 1
                  )
                }
                className="flex h-12 w-12 items-center justify-center text-xl"
              >
                -
              </button>

              <div className="flex h-12 w-16 items-center justify-center border-x">
                {hours}
              </div>

              <button
                onClick={() =>
                  setHours((prev) =>
                    prev + 1
                  )
                }
                className="flex h-12 w-12 items-center justify-center text-xl"
              >
                +
              </button>
            </div>
          </div>

          {/* ERROR */}
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-500">
              {error}
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="flex gap-4 border-t px-6 py-5">
          <button
            onClick={handleSubmit}
            className="h-12 flex-1 rounded-xl bg-blue-600 text-white transition hover:bg-blue-700"
          >
            {editData
              ? "Update Entry"
              : "Add Entry"}
          </button>

          <button
            onClick={() =>
              setOpen(false)
            }
            className="h-12 flex-1 rounded-xl border"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}