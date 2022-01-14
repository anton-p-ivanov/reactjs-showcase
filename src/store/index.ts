import { configureStore } from '@reduxjs/toolkit';

import listViewReducer from 'views/ListView/store/slice';

const store = configureStore({
  reducer: {
    listView: listViewReducer,
  },
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export default store;
