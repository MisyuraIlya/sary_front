import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { FLUSH,PAUSE,PERSIST, persistReducer, persistStore,PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from 'redux-persist/lib/storage'
// import { cartSlice } from "./cart/cart.slice";
import { userSlice } from "./user/user.slice";
import { courseSlice } from "./courses/courses.slice";
import { exerciseSlice } from "./exercises/exercises.slice";

const rootReducer = combineReducers({
//   cart: cartSlice.reducer,
  user: userSlice.reducer,
  courses: courseSlice.reducer,
  exercises: exerciseSlice.reducer
})

const persistConfig = {
  key: 'b2b',
  storage,
  whitelist:['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
