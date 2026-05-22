import type { Timesheet } from "@/types/timesheet";

export const timesheets: Timesheet[] =
  [
    {
      id: 1,

      weekNumber: 1,

      weekLabel: "Week 1",

      dateRange:
        "1 - 5 January, 2024",

      status: "Completed",

      totalHours: 40,

      expectedHours: 40,

      days: [
        {
          id: 1,

          date: "Jan 1",

          tasks: [
            {
              id: 1,

              title:
                "Homepage Development",

              project:
                "Website Redesign",

              hours: 4,

              type:
                "Development",

              description:
                "Built responsive homepage sections",
            },

            {
              id: 2,

              title:
                "API Integration",

              project:
                "Dashboard",

              hours: 3,

              type:
                "Backend",

              description:
                "Integrated analytics APIs",
            },
          ],
        },

        {
          id: 2,

          date: "Jan 2",

          tasks: [
            {
              id: 3,

              title:
                "Bug Fixes",

              project:
                "Admin Panel",

              hours: 5,

              type:
                "Maintenance",

              description:
                "Resolved login issues",
            },
          ],
        },

        {
          id: 3,

          date: "Jan 3",

          tasks: [],
        },

        {
          id: 4,

          date: "Jan 4",

          tasks: [],
        },

        {
          id: 5,

          date: "Jan 5",

          tasks: [],
        },
      ],
    },

    {
      id: 2,

      weekNumber: 2,

      weekLabel: "Week 2",

      dateRange:
        "8 - 12 January, 2024",

      status: "Completed",

      totalHours: 32,

      expectedHours: 40,

      days: [
        {
          id: 1,

          date: "Jan 8",

          tasks: [
            {
              id: 4,

              title:
                "UI Improvements",

              project:
                "Landing Page",

              hours: 6,

              type:
                "Design",

              description:
                "Improved mobile responsiveness",
            },
          ],
        },

        {
          id: 2,

          date: "Jan 9",

          tasks: [],
        },

        {
          id: 3,

          date: "Jan 10",

          tasks: [],
        },

        {
          id: 4,

          date: "Jan 11",

          tasks: [],
        },

        {
          id: 5,

          date: "Jan 12",

          tasks: [],
        },
      ],
    },

    {
      id: 3,

      weekNumber: 3,

      weekLabel: "Week 3",

      dateRange:
        "15 - 19 January, 2024",

      status: "Incomplete",

      totalHours: 18,

      expectedHours: 40,

      days: [
        {
          id: 1,

          date: "Jan 15",

          tasks: [
            {
              id: 5,

              title:
                "Testing",

              project:
                "Mobile App",

              hours: 2,

              type:
                "QA",

              description:
                "Performed unit testing",
            },
          ],
        },

        {
          id: 2,

          date: "Jan 16",

          tasks: [],
        },

        {
          id: 3,

          date: "Jan 17",

          tasks: [],
        },

        {
          id: 4,

          date: "Jan 18",

          tasks: [],
        },

        {
          id: 5,

          date: "Jan 19",

          tasks: [],
        },
      ],
    },

    {
      id: 4,

      weekNumber: 4,

      weekLabel: "Week 4",

      dateRange:
        "22 - 26 January, 2024",

      status: "Completed",

      totalHours: 40,

      expectedHours: 40,

      days: [
        {
          id: 1,

          date: "Jan 22",

          tasks: [],
        },

        {
          id: 2,

          date: "Jan 23",

          tasks: [],
        },

        {
          id: 3,

          date: "Jan 24",

          tasks: [],
        },

        {
          id: 4,

          date: "Jan 25",

          tasks: [],
        },

        {
          id: 5,

          date: "Jan 26",

          tasks: [],
        },
      ],
    },

    {
      id: 5,

      weekNumber: 5,

      weekLabel: "Week 5",

      dateRange:
        "28 January - 1 February, 2024",

      status: "Missing",

      totalHours: 0,

      expectedHours: 40,

      days: [
        {
          id: 1,

          date: "Jan 28",

          tasks: [],
        },

        {
          id: 2,

          date: "Jan 29",

          tasks: [],
        },

        {
          id: 3,

          date: "Jan 30",

          tasks: [],
        },

        {
          id: 4,

          date: "Jan 31",

          tasks: [],
        },

        {
          id: 5,

          date: "Feb 1",

          tasks: [],
        },
      ],
    },
  ];