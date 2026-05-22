export const getTimesheets =
  async () => {
    const res = await fetch(
      "/api/timesheets"
    );

    if (!res.ok) {
      throw new Error(
        "Failed to fetch timesheets"
      );
    }

    return res.json();
  };

export const getTimesheetById =
  async (id: string) => {
    const res = await fetch(
      `/api/timesheets/${id}`
    );

    if (!res.ok) {
      throw new Error(
        "Failed to fetch timesheet"
      );
    }

    return res.json();
  };