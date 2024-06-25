import RenderActions, { postRecord } from '../lib/renderActions';

export const defaultColumns = [
  {
    key: 'title',
    title: 'Заголовок поста',
    dataIndex: 'title',
  },
  {
    key: 'body',
    title: 'Тело поста',
    dataIndex: 'body',
  },
  {
    key: 'actions',
    title: 'Действия',
    dataIndex: 'id',
    render: (_: unknown, record: postRecord) => {
      return <RenderActions record={record} />;
    },
  },
];
