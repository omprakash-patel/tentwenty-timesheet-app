export interface Task {
  id: number;

  title: string;

  project: string;

  hours: number;

  type: string;

  description: string;
}

export interface Day {
  id: number;

  date: string;

  tasks: Task[];
}

export interface Timesheet {
  id: number;

  weekNumber: number;

  weekLabel: string;

  dateRange: string;

  status:
    | "Completed"
    | "Incomplete"
    | "Missing";

  totalHours: number;

  expectedHours: number;

  days: Day[];
}