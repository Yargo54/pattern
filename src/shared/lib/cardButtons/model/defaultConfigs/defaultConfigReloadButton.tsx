import { reusedTableSlice } from '../../../../../store/reducers/reusedTableSlice';

console.log('СТЕЙТ', reusedTableSlice.getInitialState());

export const defaultConfigReloadButton = {
  tooltipTitle: 'Обновить',
  showButton: false,
  disabled: false,
  style: undefined,
  onClick: () => alert('Нажал обновить'),
};
