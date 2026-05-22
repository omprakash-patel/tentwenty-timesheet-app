import { z } from "zod";

export const timesheetSchema = z.object({
  week: z.string().min(1, "Week is required"),
  date: z.string().min(1, "Date is required"),
  status: z.string().min(1, "Status is required"),
});