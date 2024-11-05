import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const contactsConfig = {
  key: "contactsKey",
  storage,
  whitelist: ["items"], // blacklist: ["showProfilesList"]
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsConfig, contactsReducer),
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const store = configureStore({});
// //1. Оголошуєм початкове значення стану Redux
// const initialState = {
//   contacts: {
//     items: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//   },
//   filters: {
//     name: "",
//   },
// };

// // 2. Передаємо початкове значення стану Redux
// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// export const store = configureStore({
//   reducer: rootReducer,
// });
export const persistor = persistStore(store);
