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
    openPanel: (state, action: PayloadAction<string | undefined>) => {
      const leftPanelId = action.payload;

      const id = nanoid(3);
      const panel = { label: "Panel-" + id, id };

      if (!leftPanelId) {
        state.panels = state.panels.concat(panel);
      } else {
        // split
        const leftPanelIndex = state.panels.findIndex(
          (p) => p.id === leftPanelId
        );
        const head = state.panels.slice(0, leftPanelIndex + 1);
        const tail = state.panels.slice(leftPanelIndex + 1);
        state.panels = head.concat([panel]).concat(tail);
      }
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
