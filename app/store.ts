import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/login/loginSlice'
import totalCostReducer from '../features/state_enabled/totalCostSlice'
export const store = configureStore({
  reducer: {
    login: loginReducer,
    totalCost: totalCostReducer
    
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;

