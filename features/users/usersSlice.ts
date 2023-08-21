import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userState {
    fullName: string;
    dateOfBirth: string;
    country: string;
    email: string;
    CMND: string;
    Sex: string;
    languageTalk: string[];
    job: string;
    locationLiving: string;
    descriptionOfLife: string;
}

const initialState : userState = {
    fullName: '',
    dateOfBirth: '',
    country: '',
    email: '',
    CMND: '',
    Sex: '',
    languageTalk: [],
    job: '',
    locationLiving: '',
    descriptionOfLife: '',
}

export const userSlice = createSlice({
        name: 'user',
  initialState,
  reducers: {
    changing_full_name: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    changing_date_of_birth: (state, action: PayloadAction<string>) => {
      state.dateOfBirth = action.payload;
    },
    changing_country: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    changing_email: (state, action: PayloadAction<string>) => {
        state.email = action.payload;
    },
    changing_CMND: (state, action: PayloadAction<string>) => {
        state.CMND = action.payload;
    },
    changing_Sex: (state, action: PayloadAction<string>) => {
        state.Sex = action.payload;
    },
    changing_job: (state, action: PayloadAction<string>) => {
        state.job = action.payload;
    },
    changing_location_living: (state, action: PayloadAction<string>) => {
        state.locationLiving = action.payload;
    },
    changing_description_of_life: (state, action: PayloadAction<string>) => {
        state.descriptionOfLife = action.payload;
    },
    
    
  },


})