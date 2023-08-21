import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CostState {
  ENABLE_TOTALCOST_STATUS: boolean;
}


const initialState: CostState = {
  ENABLE_TOTALCOST_STATUS: false,
};

export const totalCostSlice = createSlice({
  name: 'totalCost',
  initialState,
  reducers: {
    enable_cost: (state, action: PayloadAction<boolean>) => {
      state.ENABLE_TOTALCOST_STATUS = action.payload;
    }
  },
});


export const {enable_cost} = totalCostSlice.actions;
export default totalCostSlice.reducer;
