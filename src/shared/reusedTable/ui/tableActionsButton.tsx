import { Button, Popconfirm, Space, Tooltip } from 'antd';
import { FC } from 'react';
import { ITableActionsButton } from '../model/ITableActionsButton';
import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import '../styles/tableActionsButton.css';

const TableActionsButton: FC<ITableActionsButton> = (props) => {
  return (
    <Space>
      <Tooltip
        title={props.viewButtonConfig?.tooltipTitle ?? 'Просмотр'}
        key={Date.now().toString(36) + Math.random().toString(36).substring(2)}>
        <Button
          className='viewButtonStyle'
          ghost
          type='primary'
          size='small'
          shape='circle'
          disabled={props.viewButtonConfig?.disabled ?? false}
          style={props.viewButtonConfig?.style ?? undefined}
          icon={props.viewButtonConfig?.icon ?? <EyeOutlined />}
          onClick={props.viewButtonConfig?.onClick}
        />
      </Tooltip>

      <Tooltip
        title={props.editButtonConfig?.tooltipTitle ?? 'Редактировать'}
        key={Date.now().toString(36) + Math.random().toString(36).substring(2)}>
        <Button
          className='editButtonStyle'
          ghost
          type='primary'
          size='small'
          shape='circle'
          disabled={props.editButtonConfig?.disabled ?? false}
          style={props.editButtonConfig?.style ?? undefined}
          icon={props.editButtonConfig?.icon ?? <EditOutlined />}
          onClick={props.editButtonConfig?.onClick}
        />
      </Tooltip>

      <Tooltip
        title={props.deleteButtonConfig?.tooltipTitle ?? 'Удалить'}
        key={Date.now().toString(36) + Math.random().toString(36).substring(2)}>
        <Popconfirm
          placement='topRight'
          title={
            props.deleteButtonConfig?.popconfirmTitle ?? 'Вы уверены, что хотите удалить запись?'
          }
          okText='Да'
          cancelText='Нет'
          onConfirm={props.deleteButtonConfig?.onConfirm}>
          <Button
            className='deleteButtonStyle'
            ghost
            type='primary'
            size='small'
            shape='circle'
            disabled={props.deleteButtonConfig?.disabled ?? false}
            style={props.deleteButtonConfig?.style ?? undefined}
            icon={props.deleteButtonConfig?.icon ?? <DeleteOutlined />}
          />
        </Popconfirm>
      </Tooltip>

      <Tooltip
        title={props.downloadButtonConfig?.tooltipTitle ?? 'Выгрузить'}
        key={Date.now().toString(36) + Math.random().toString(36).substring(2)}>
        <Button
          className='downloadButtonStyle'
          ghost
          type='primary'
          size='small'
          shape='circle'
          disabled={props.downloadButtonConfig?.disabled ?? false}
          style={props.downloadButtonConfig?.style ?? undefined}
          icon={props.downloadButtonConfig?.icon ?? <DownloadOutlined />}
        />
      </Tooltip>
    </Space>
  );
};

export default TableActionsButton;
