import { FC } from 'react';
import TableActionsButton from '../../../shared/reusedTable/ui/tableActionsButton';
import { useAppDispatch } from '../../../store/hooks/redux';
import { reusedModalWithFormSlice } from '../../../store/reducers/reusedModalWithFormSlice';
import { reusedFormSlice } from '../../../store/reducers/reusedFormSlice';

export type postRecord = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

const RenderActions: FC<{ record: postRecord }> = (props) => {
  const { setOpenStatus } = reusedModalWithFormSlice.actions;
  const { setFormItems } = reusedFormSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <TableActionsButton
      viewButtonConfig={{
        onClick: () => console.log('Запись', props.record),
      }}
      editButtonConfig={{
        onClick: () => {
          console.log('Запись', props.record);

          dispatch(
            setFormItems([
              {
                type: 'inputTextArea',
                formItemProps: {
                  name: 'body',
                  label: 'Тело поста',
                  value: props.record.body,
                },
              },
              {
                type: 'inputTextArea',
                formItemProps: {
                  name: 'title',
                  label: 'Заголовок поста',
                  value: props.record.title,
                },
              },
            ]),
          );

          dispatch(setOpenStatus(true));
        },
      }}
    />
  );
};

export default RenderActions;
