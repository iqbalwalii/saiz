import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import session from 'redux-persist/lib/storage/session'; // defaults to localStorage for web
import { rootReducer } from '../reducers';
// WHITELIST
const persistConfig = {
  key: 'user',
  storage: session, // new CookieStorage(JSON.stringify(new Cookies())),,
};
const persistorReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistorReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
