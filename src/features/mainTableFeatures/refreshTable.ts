// import { IRefreshFunc } from './model/IRefreshFunc';

import ApiDiContainer, { controller } from '../../shared/api/apiDiContainer';

// export const refresh = async (props: IRefreshFunc) => {
//   //   const { setPaginationConfig } = reusedTableSlice.actions;
//   //   const { paginationConfig } = useAppSelector((state) => state.reusedTableReducer);
//   //   const dispatch = useAppDispatch();

//   try {
//     const response = await props.currentCallBackFunc();
//   } catch (error) {
//     if (error.name === 'SyntaxError') {
//       console.error(error.message);
//     } else {
//       console.error(error);
//     }
//   }
// };

export const { data: items, refetch } = ApiDiContainer.ProxyApiDict.useGetDictItemsQuery({
  endPoint: '/history-event',
  controller: controller,
});
