import { Form, Modal } from 'antd';
import { IReusedModalWithFormContainer } from '../model/IReusedModalWithFormContainer';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux';
import ReusedForm from '../../reusedForm';
import { reusedModalWithFormSlice } from '../../../store/reducers/reusedModalWithFormSlice';

const ReusedModalWithFormContainer: React.FC<IReusedModalWithFormContainer> = (props) => {
  const [form] = Form.useForm();
  const { open, loading } = useAppSelector((state) => state.reusedModalReducer);
  const { setOpenStatus } = reusedModalWithFormSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <Modal
      title={props.modalProps?.title ?? ''}
      open={open}
      okText={props.modalProps?.okText ?? 'Ок'}
      cancelText={props.modalProps?.cancelText ?? 'Закрыть'}
      onOk={() => form.submit()}
      onCancel={() => {
        form.resetFields();
        dispatch(setOpenStatus(false));
      }}
      okButtonProps={{
        loading: loading,
      }}
      width={props.modalProps?.width ?? 500}
    >
      <ReusedForm form={form} />
    </Modal>
  );
};

export default ReusedModalWithFormContainer;
