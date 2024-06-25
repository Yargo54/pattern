import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IConfigElem } from '../../shared/lib/createNodeElements/model/IConfigElem';

interface reusedFormState {
  formItems: IConfigElem[];
}

const initialReusedFormState: reusedFormState = {
  formItems: [],
};

export const reusedFormSlice = createSlice({
  name: 'reusedForm',
  initialState: initialReusedFormState,
  reducers: {
    setFormItems(state, action: PayloadAction<IConfigElem[]>) {
      state.formItems = action.payload;
    },
    resetFormItems(state) {
      state.formItems = [];
    },
  },
});

export default reusedFormSlice.reducer;
