import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export type Panel = {
  label: string;
  id: string;
};

export interface Perspective {
  panels: Panel[];
}

export const initialState: Perspective = {
  panels: []
};

export const perspectiveSlice = createSlice({
  name: "perspective",
  initialState,
  reducers: {
    openPanel: (state) => {
      const id = nanoid(3);
      const panel = { label: "Panel-" + id, id };
      state.panels = state.panels.concat(panel);
    },
    closePanel: (state, action: PayloadAction<string>) => {
      const newPanels = state.panels.filter((_p) => _p.id !== action.payload);
      if (newPanels.length === 0) {
        state.panels = [];
      } else {
        state.panels = newPanels;
      }
    }
  }
});

export const { openPanel, closePanel } = perspectiveSlice.actions;

const PerspectiveReducer = perspectiveSlice.reducer;
export default PerspectiveReducer;
