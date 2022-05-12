import { configureStore, Middleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { reducer } from '../store/root-reducer';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const localStorageMiddleware: Middleware = (store) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(store.getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (!localStorage.getItem('applicationState')) {
    return;
  }
  return JSON.parse(localStorage.getItem('applicationState') as string); // re-hydrate the store
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
