import '../css/App.css';
import { useAppDispatch } from '../../store/hooks/redux';
import { reusedModalWithFormSlice } from '../../store/reducers/reusedModalWithFormSlice';
import { reusedFormSlice } from '../../store/reducers/reusedFormSlice';
import { useEffect, useState } from 'react';
import { IConfigElem } from '../../shared/lib/createNodeElements/model/IConfigElem';
import Posts from '../../pages/posts';
import { Button, Layout, Menu } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

function App() {
  const { setOpenStatus } = reusedModalWithFormSlice.actions;
  const { setFormItems } = reusedFormSlice.actions;

  const dispatch = useAppDispatch();

  const [collapsed, setCollapsed] = useState(false);

  const test: IConfigElem[] = [
    {
      type: 'inputTextArea',
      formItemProps: {
        name: 'test',
        label: 'test field',
        value: 'Hi',
      },
    },
    {
      type: 'inputTextArea',
      formItemProps: {
        name: 'test1',
        label: 'test field',
        value: 'Hi',
      },
    },
    {
      type: 'inputTextArea',
      formItemProps: {
        name: 'test2',
        label: 'test field',
        value: 'Hi',
      },
    },
    {
      type: 'inputTextArea',
      formItemProps: {
        name: 'test3',
        label: 'test field',
        value: 'Hi',
      },
    },
  ];

  useEffect(() => {
    dispatch(setFormItems(test));
  }, []);

  return (
    // <div style={{ width: 700 }}>
    //   {/* <Button onClick={() => dispatch(setOpenStatus(true))}>Click Me</Button>
    //   <ReusedModalWithForm /> */}
    //   <Posts />
    // </div>

    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: '#FFF' }}>
        <Menu
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: '#FFF', padding: 0, paddingLeft: 15 }}>
          <Button
            type='text'
            icon={
              collapsed ? (
                <MenuUnfoldOutlined style={{ fontSize: 20 }} />
              ) : (
                <MenuFoldOutlined style={{ fontSize: 20 }} />
              )
            }
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
        <Content>
          <Posts />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
