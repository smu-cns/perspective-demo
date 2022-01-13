import { configureStore } from '@reduxjs/toolkit/dist/configureStore';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { TypedUseSelectorHook } from 'react-redux/es/types';

export type Panel = {
  label: string;
  id: string;
};

export interface Perspective {
  panels: Panel[];
}

export const initialState: Perspective = {
  panels: [],
};

export const perspectiveSlice = createSlice({
  name: 'perspective',
  initialState,
  reducers: {
    openPanel: (state) => {
      const id = nanoid(3);
      const panel = { label: 'Panel-' + id, id };
      state.value = state.value.concat(panel);
    },
    closePanel: (state, action: PayloadAction<string>) => {
      const newPanels = state.value.filter((_p) => _p.id !== action.payload);
      if (newPanels.length === 0) {
        state.value = [];
      } else {
        state.value = newPanels;
      }
    },
  },
});

export const store = configureStore({
  reducer: perspectiveSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { openPanel, closePanel } = perspectiveSlice.actions;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
