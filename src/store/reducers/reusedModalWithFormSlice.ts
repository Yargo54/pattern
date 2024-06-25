import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IReusedModalWithFormContainer } from '../../shared/reusedModalWithForm/model/IReusedModalWithFormContainer';

const initialReusedModalWithFormState: IReusedModalWithFormContainer = {
  open: false,
  loading: false,
};

export const reusedModalWithFormSlice = createSlice({
  name: 'reusedModal',
  initialState: initialReusedModalWithFormState,
  reducers: {
    setOpenStatus(state, action: PayloadAction<boolean>) {
      state.open = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export default reusedModalWithFormSlice.reducer;
