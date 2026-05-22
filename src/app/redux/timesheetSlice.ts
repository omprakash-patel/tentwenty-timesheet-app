import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Timesheet } from "@/types/timesheet";

interface TimesheetState {
  timesheets: Timesheet[];
}

const initialState: TimesheetState = {
  timesheets: [],
};

const timesheetSlice = createSlice({
  name: "timesheet",

  initialState,

  reducers: {
    setTimesheets: (state, action: PayloadAction<Timesheet[]>) => {
      state.timesheets = action.payload;
    },

    addTimesheet: (state, action: PayloadAction<Timesheet>) => {
      state.timesheets.push(action.payload);
    },

    updateTimesheet: (state, action: PayloadAction<Timesheet>) => {
      const index = state.timesheets.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.timesheets[index] = action.payload;
      }
    },

    deleteTimesheet: (state, action: PayloadAction<number>) => {
      state.timesheets = state.timesheets.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  setTimesheets,
  addTimesheet,
  updateTimesheet,
  deleteTimesheet,
} = timesheetSlice.actions;

export default timesheetSlice.reducer;