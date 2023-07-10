// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistReducer } from "reduxjs-toolkit-persist";
// import storage from "reduxjs-toolkit-persist/lib/storage";
// import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
// import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
// import currentTempalteReducer from "./redux/currentTempalteReducer";
// import rootDataReducer from "./redux/rootDataReducer";
// import currentValuesReducer from "./redux/currentValuesReducer";


// const persistConfig = {
//   key: "root",
//   storage: storage,
//   stateReconciler: autoMergeLevel1,
//   whiteList: ["rootDataReducer", "currentTempalteReducer", "currentValuesReducer",],
// };

// const middlewareHandler = (getDefaultMiddleware) => {
//   return [
//     ...getDefaultMiddleware({
//       serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   ];
// };
// const reducers = combineReducers({
//   rootDataReducer,
//   currentTempalteReducer,
//   currentValuesReducer,
// });

// const _persistedReducer = persistReducer(persistConfig, reducers);

// export const store = configureStore({
//   reducer: _persistedReducer,
//   middleware: (getDefaultMiddleware) => 
//     middlewareHandler(getDefaultMiddleware),
// });


/* --------------------------- ------------------ --------------------------- */


// store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import storage from "reduxjs-toolkit-persist/lib/storage";
import { jsonServerApi } from './services/jsonServerApi'
import currentTempalteReducer from "./redux/currentTempalteReducer";
import rootDataReducer from "./redux/rootDataReducer";
import currentValuesReducer from "./redux/currentValuesReducer";



const reducers = combineReducers({
  // someSlice,
    rootDataReducer,
  currentTempalteReducer,
  currentValuesReducer,
  [jsonServerApi.reducerPath]: jsonServerApi.reducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  stateReconciler: autoMergeLevel1,
  storage: storage,
  whiteList: [ "currentTempalteReducer", "currentValuesReducer",],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Redux persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      jsonServerApi.middleware,
    ),
})
