import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reusedFormReducer from './reducers/reusedFormSlice';
import reusedModalReducer from './reducers/reusedModalWithFormSlice';
import reusedTableReducer from './reducers/reusedTableSlice';
import { dictAPI } from '../shared/api/apiServices/apiDict';

const rootReducer = combineReducers({
  reusedFormReducer,
  reusedModalReducer,
  reusedTableReducer,
  [dictAPI.reducerPath]: dictAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dictAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
