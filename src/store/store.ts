import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import setting from './slice/settingSlice';
import user from './slice/userSlice';

const persistKey = 'ROOT_APP_KEY';

const persistConfig = {
  key: persistKey,
  version: 1,
  storage: AsyncStorage,
  whitelist: ['user', 'setting', 'appInitialization'],
};

const rootReducer = combineReducers({user, setting});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      immutableCheck: {
        ignoredPaths: ['posts'],
      },

      // serializableCheck: { ignoredActions: [PERSIST] },
      serializableCheck: false,
    });
  },
});
export const persister = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
