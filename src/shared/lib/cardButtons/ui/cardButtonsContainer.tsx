import { Button, Space, Tooltip, Upload } from 'antd';
import { FC } from 'react';
import { ICardButtons } from '../model/ICardButtons';
import { defaultConfigAddButton } from '../model/defaultConfigs/defaultConfigAddButton';
import { defaultConfigResetButton } from '../model/defaultConfigs/defaultConfigResetButton';
import { defaultConfigDownloadButton } from '../model/defaultConfigs/defaultConfigDownloadButton';
import { defaultConfigReloadButton } from '../model/defaultConfigs/defaultConfigReloadButton';
import {
  defaultConfigUploadButton,
  propsUpload,
} from '../model/defaultConfigs/defaultConfigUploadButton';
import '../cardButton.css';
import { SyncOutlined } from '@ant-design/icons';

const CardButtonsContainer: FC<ICardButtons> = (props) => {
  console.log('props.reloadButtonConfig?.spinStatus', props.reloadButtonConfig?.spinStatus);
  return (
    <Space>
      {(props.resetButtonConfig?.showButton ?? defaultConfigResetButton?.showButton) && (
        <Tooltip
          title={props.resetButtonConfig?.tooltipTitle ?? defaultConfigResetButton?.tooltipTitle}
          key={Date.now().toString(36) + Math.random().toString(36).substring(2)}>
          <Button
            ghost
            type='primary'
            disabled={props.resetButtonConfig?.disabled ?? defaultConfigResetButton?.disabled}
            style={props.resetButtonConfig?.style ?? defaultConfigResetButton?.style}
            icon={props.resetButtonConfig?.icon ?? defaultConfigResetButton?.icon}
            onClick={props.resetButtonConfig?.onClick ?? defaultConfigResetButton.onClick}
          />
        </Tooltip>
      )}

      {(props.addButtonConfig?.showButton ?? defaultConfigAddButton?.showButton) && (
        <Tooltip
          title={props.addButtonConfig?.tooltipTitle ?? defaultConfigAddButton?.tooltipTitle}
          key={Date.now().toString(36) + Math.random().toString(36).substring(2)}>
          <Button
            ghost
            type='primary'
            disabled={props.addButtonConfig?.disabled ?? defaultConfigAddButton?.disabled}
            style={props.addButtonConfig?.style ?? defaultConfigAddButton?.style}
            icon={props.addButtonConfig?.icon ?? defaultConfigAddButton?.icon}
            onClick={props.addButtonConfig?.onClick ?? defaultConfigAddButton.onClick}
          />
        </Tooltip>
      )}

      {(props.downloadButtonConfig?.showButton ?? defaultConfigDownloadButton?.showButton) && (
        <Tooltip
          title={
            props.downloadButtonConfig?.tooltipTitle ?? defaultConfigDownloadButton?.tooltipTitle
          }
          key={Date.now().toString(36) + Math.random().toString(36).substring(2)}>
          <Button
            className='redButton'
            disabled={props.downloadButtonConfig?.disabled ?? defaultConfigDownloadButton?.disabled}
            style={props.downloadButtonConfig?.style ?? defaultConfigDownloadButton?.style}
            icon={props.downloadButtonConfig?.icon ?? defaultConfigDownloadButton?.icon}
            onClick={props.downloadButtonConfig?.onClick ?? defaultConfigDownloadButton.onClick}
          />
        </Tooltip>
      )}

      {(props.uploadButtonConfig?.showButton ?? defaultConfigUploadButton?.showButton) && (
        <Tooltip
          title={props.uploadButtonConfig?.tooltipTitle ?? defaultConfigUploadButton?.tooltipTitle}
          key={Date.now().toString(36) + Math.random().toString(36).substring(2)}>
          <Upload
            {...propsUpload}
            key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
            accept={
              props.uploadButtonConfig?.acceptUpload ?? defaultConfigUploadButton?.acceptUpload
            }
            method='POST'
            onChange={(data) =>
              props.uploadButtonConfig && props.uploadButtonConfig?.onChange
                ? props.uploadButtonConfig.onChange(data)
                : defaultConfigUploadButton?.onChange(data)
            }>
            <Button
              className='uploadButton'
              disabled={props.uploadButtonConfig?.disabled ?? defaultConfigUploadButton?.disabled}
              style={props.uploadButtonConfig?.style ?? defaultConfigUploadButton?.style}
              icon={props.uploadButtonConfig?.icon ?? defaultConfigUploadButton?.icon}
              onClick={props.uploadButtonConfig?.onClick ?? defaultConfigUploadButton.onClick}
            />
          </Upload>
        </Tooltip>
      )}

      {(props.reloadButtonConfig?.showButton ?? defaultConfigReloadButton?.showButton) && (
        <Tooltip
          title={props.reloadButtonConfig?.tooltipTitle ?? defaultConfigReloadButton?.tooltipTitle}
          key={Date.now().toString(36) + Math.random().toString(36).substring(2)}>
          <Button
            className='greenButton'
            disabled={props.reloadButtonConfig?.disabled ?? defaultConfigReloadButton?.disabled}
            style={props.reloadButtonConfig?.style ?? defaultConfigReloadButton?.style}
            icon={
              props.reloadButtonConfig?.icon ?? (
                <SyncOutlined spin={props.reloadButtonConfig?.spinStatus} />
              )
            }
            onClick={props.reloadButtonConfig?.onClick ?? defaultConfigReloadButton.onClick}
          />
        </Tooltip>
      )}
    </Space>
  );
};

export default CardButtonsContainer;
