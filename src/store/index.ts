import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {},
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export default store;
