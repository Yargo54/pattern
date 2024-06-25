import { Flex, Form, FormProps, message } from 'antd';
import { IReusedFormContainer } from '../model/IReusedFormContainer';
import { useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks/redux';
import createNodeElements from '../../lib/createNodeElements/createNodeElements';

const ReusedFormContainer: React.FC<IReusedFormContainer> = (props) => {
  const { formItems } = useAppSelector((state) => state.reusedFormReducer);

  const onFinish: FormProps['onFinish'] = (values) => {
    console.log('Введённые значения: ', values);
  };

  const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
    if (errorInfo.errorFields.length > 0) {
      message.error('Заполните обязательные поля');
    }
    console.error('Ошибка сохранения формы: ', errorInfo);
  };

  useEffect(() => {
    formItems.forEach((element) => {
      props.form.setFieldsValue({
        [`${element.formItemProps?.name}`]: element.formItemProps?.value,
      });
    });

    console.log(props.form.getFieldsValue(true));
  }, []);

  return (
    <Form
      key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
      form={props.form}
      labelWrap={props.antFormProps?.labelWrap ?? true}
      colon={props.antFormProps?.colon ?? false}
      size={props.antFormProps?.size ?? 'middle'}
      layout={props.antFormProps?.layout ?? 'vertical'}
      labelAlign={props.antFormProps?.labelAlign ?? 'left'}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Flex gap='middle' wrap>
        {formItems?.map((formItem) => (
          <div key={Date.now().toString(36) + Math.random().toString(36).substring(2)}>
            <Form.Item {...formItem.formItemProps}>{createNodeElements(formItem)}</Form.Item>
          </div>
        ))}
      </Flex>
    </Form>
  );
};

export default ReusedFormContainer;
